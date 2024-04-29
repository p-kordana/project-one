import PropTypes from "prop-types";

Button.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.any,
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.any,
};

// const tailwindOrganizer = <div className=""></div>;

const types = {
  primary:
    "inline-block rounded-full bg-amber-500 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-500 hover:bg-amber-400 focus:outline-none focus:ring-amber-400 disabled:cursor-not-allowed",
  secondary:
    "inline-block rounded-full border-stone-300 bg-amber-500 bg-transparent font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-500 hover:bg-stone-300 hover:text-stone-700 focus:bg-stone-300 focus:text-stone-700 focus:outline-none focus:ring-stone-300 disabled:cursor-not-allowed",
  delete:
    "inline-block rounded-full border-red-700 bg-red-400 font-semibold uppercase tracking-wide text-white transition-colors duration-500  hover:bg-red-700  hover:text-white focus:bg-red-700 focus:outline-none focus:ring-red-700 disabled:cursor-not-allowed",
};

const sizes = {
  default: "px-3 py-2 border-2 focus:ring focus:ring-offset-2",
  small: "px-1 py-0 border-none focus:ring-2 focus:ring-offset-1 text-[8pt]",
};

function Button({
  disabled = false,
  children,
  onClick,
  type = "primary",
  size = "default",
  className = "",
}) {
  const style = `${types[type]} ${sizes[size]}`;

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${style} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
