import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addItem } from "../cart/cartSlice";

MenuItem.propTypes = {
  pizza: PropTypes.any,
};

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  function handleAddItem() {
    dispatch(
      addItem({
        pizzaId: id,
        name,
        quantity: 1,
        unitPrice,
        totalPrice: 1 * unitPrice,
      }),
    );
  }

  return (
    <li className="flex gap-4 py-2 font-pizza">
      <img
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
        src={imageUrl}
        alt={name}
      />
      <div className="flex grow flex-col">
        <p className="text-base font-semibold sm:text-lg">{name}</p>
        <p className="text-xs capitalize italic text-stone-500 sm:text-sm">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between text-xs sm:text-sm md:text-base">
          {!soldOut ? (
            <p className="italic">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="font-semibold uppercase text-stone-400">Sold out</p>
          )}
          {!soldOut && (
            <Button
              size="small"
              className="md:px-3 md:py-2 md:text-sm"
              onClick={handleAddItem}
            >
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
