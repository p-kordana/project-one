import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";

CartItem.propTypes = {
  item: PropTypes.any,
};

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="grid grid-cols-2 grid-rows-2 py-2 sm:flex sm:grid-rows-1 sm:items-center sm:justify-between">
      <p className="col-span-2 mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="col-span-2 flex items-center justify-between sm:gap-6">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Button type="delete" size="small" className="font-bold">
          &times;
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
