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
    <li>
      <div className="font-pizza flex flex-row items-center justify-between gap-4 px-4 py-1 text-xs sm:text-sm">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
