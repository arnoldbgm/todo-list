import PropTypes from "prop-types";

export default function TodoListCategory({ icon, text }) {
  return (
    <button className="grid place items-center cursor-pointer">
      <img
        src={icon}
        alt=""
        className="w-[51px] h-[51px] border p-2 shadow rounded-md"
      />
      <p className="mt-2">{text}</p>
    </button>
  );
}

TodoListCategory.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
};
