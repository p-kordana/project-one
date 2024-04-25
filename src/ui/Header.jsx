import { Link } from "react-router-dom";
import OrderSearch from "../features/order/OrderSearch";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex items-center justify-between border-b-2 border-stone-500 bg-amber-500 p-4 uppercase sm:p-6">
      <ul className="flex justify-between space-x-2 sm:space-x-4 md:space-x-6">
        <li>
          <Link to={"/"}>Zoom Pizza</Link>
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/order/new"}>Order Now</Link>
        </li>
      </ul>
      <OrderSearch />
      <Username />
    </header>
  );
}

export default Header;
