import PropTypes from "prop-types";
import {  checkCircle } from "../../assets/icons";

export default function TodoList({ tasks, category }) {
  const filterTAsk = category
    ? tasks.filter((task) => task.category == category)
    : tasks;

  return (
    <div className="my-3 rounded bg-gray-300 p-3">
      {filterTAsk.legnth > 0 ? (
        filterTAsk.map((task) => (
          <div
            key={task.text}
            className="bg-white rounded-xl mt-3 px-2 py-3 flex gap-3"
          >
            <img src={checkCircle} /> <p>{task.text}</p>
          </div>
        ))
      ) : (
        <>
          <p>No hay nada que hacer</p>
        </>
      )}
    </div>
  );
}

TodoList.propTypes = {
  tasks: PropTypes.array,
  category: PropTypes.string,
};
