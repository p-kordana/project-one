import PropTypes from "prop-types";

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.any,
};

function Input({
  type,
  name,
  required,
  placeholder,
  className,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${className} rounded-lg border-2 border-stone-300 px-2 py-1 text-sm`}
    ></input>
  );
}

export default Input;
