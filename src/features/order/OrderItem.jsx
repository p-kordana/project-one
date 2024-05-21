import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

OrderItem.propTypes = {
  item: PropTypes.any,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.any,
};

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="grid grow grid-cols-2 grid-rows-2 items-center justify-between px-4 py-1 font-pizza text-xs sm:text-sm">
      <div className="col-span-2 flex flex-row justify-between">
        <p className="">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="col-span-2 text-sm capitalize italic text-stone-400">
        {isLoadingIngredients ? "Loading..." : ingredients?.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
