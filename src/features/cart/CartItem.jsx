import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";

CartItem.propTypes = {
  item: PropTypes.any,
};

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
