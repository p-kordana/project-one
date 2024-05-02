import { Link } from "react-router-dom";
import { getCartPrice, getNumItems } from "./cartSlice";
import { useSelector } from "react-redux";

function CartOverview() {
  const numItems = useSelector(getNumItems);
  const totPrice = useSelector(getCartPrice);

  if (!numItems) return null;

  return (
    <div
      className={`slidingUp flex items-center justify-between border-t-2 border-stone-900 bg-stone-700 p-3 text-sm uppercase text-stone-200 sm:px-6 md:text-base`}
    >
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{numItems} pizzas</span>
        <span>${totPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
