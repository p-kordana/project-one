import PropTypes from "prop-types";

Checkbox.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

function Checkbox({ name, id, value, onChange }) {
  return (
    <input
      type="checkbox"
      name={name}
      id={id}
      className="mr-2 mt-3 h-4 w-4 accent-amber-400"
      value={value}
      onChange={onChange}
    ></input>
  );
}

export default Checkbox;
