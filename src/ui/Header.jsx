import { Link } from "react-router-dom";
import OrderSearch from "../features/order/OrderSearch";

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/order/new"}>Order Now</Link>
        </li>
      </ul>
      <OrderSearch />
      <p>Username</p>
    </header>
  );
}

export default Header;
