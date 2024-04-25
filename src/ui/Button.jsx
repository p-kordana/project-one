import PropTypes from "prop-types";

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

function Button({ disabled, children }) {
  return (
    <button
      disabled={disabled}
      className="mt-2 inline-block rounded-full bg-amber-500 px-3 py-2 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-500 hover:bg-amber-400 focus:outline-none focus:ring focus:ring-amber-400 focus:ring-offset-2 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  );
}

export default Button;
