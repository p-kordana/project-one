import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to={"/"}> Fast React</Link>
      <p>Username</p>
    </header>
  );
}

export default Header;
