import PropTypes from "prop-types";

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.any,
  defaultValue: PropTypes.string,
  onChange: PropTypes.any,
};

function Input({
  type,
  name,
  required,
  disabled,
  placeholder,
  className,
  value,
  defaultValue,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      required={required}
      {...(disabled !== undefined ? { disabled: disabled } : {})}
      {...(placeholder !== undefined ? { placeholder: placeholder } : {})}
      {...(value !== undefined ? { value: value } : {})}
      {...(defaultValue !== undefined ? { defaultValue: defaultValue } : {})}
      onChange={onChange}
      className={`${className} rounded-lg border-2 border-stone-300 px-2 py-1 text-sm`}
    ></input>
  );
}

export default Input;
