import PropTypes from "prop-types";
import { Link } from "react-router-dom";

LinkButton.propTypes = {
  children: PropTypes.any,
  to: PropTypes.string,
};

const linkStyle = "text-sm text-blue-500 hover:text-blue-700 hover:underline";

function LinkButton({ children, to }) {
  return (
    <Link to={to === "-1" ? -1 : to} className={linkStyle}>
      {children}
    </Link>
  );
}

export default LinkButton;
