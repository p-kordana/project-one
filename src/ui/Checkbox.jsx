import PropTypes from "prop-types";

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
};

function Checkbox({ name, id }) {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      className="mr-2 mt-3 h-4 w-4 accent-amber-400"
    ></input>
  );
}

export default Checkbox;
