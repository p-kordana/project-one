import PropTypes from "prop-types";

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.any,
  className: PropTypes.any,
};

const buttonStyle =
  "inline-block rounded-full bg-amber-500 px-2 py-1 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-500 hover:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-offset-2 disabled:cursor-not-allowed";

function Button({ disabled = false, children, onClick, className = "" }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${buttonStyle} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
