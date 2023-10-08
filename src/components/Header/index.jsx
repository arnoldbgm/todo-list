import PropTypes from "prop-types";
export default function Header({ title, text }) {
  return (
    <>
      <nav className="bg-green-500 md:bg-red-700 lg:bg-purple-700 xl:bg-yellow-500 2xl:bg-orange-600">
        <ul className="flex border gap-3 text-2xl font-bold">
          <li className="cursor-pointer hover:text-white">Home</li>
          <li className="cursor-pointer hover:text-white">About</li>
          <li className="cursor-pointer hover:text-white">Info</li>
        </ul>
      </nav>
      <h2>{title}</h2>
      <p>{text}</p>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
