import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  getNumItemsById,
  removeItem,
  updateQuantity,
} from "../cart/cartSlice";

MenuItem.propTypes = {
  pizza: PropTypes.any,
};

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const numInCart = useSelector(getNumItemsById(id));

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
  function handleAddMore() {
    dispatch(updateQuantity(id, 1));
  }

  function handleRemove() {
    dispatch(removeItem(id));
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

          {/* 
          TODO: decide if i want conditional add/delete based on items in cart 
            Other option is to change Add button to Add another if already present in cart
            Either of these still require a method to check if item exists in cart 
            Can add new selector to cartSlice getNumItemsInCartById(pizzaId) > numItems
          */}
          <div className="space-x-2">
            {!soldOut && (
              <>
                {!numInCart && (
                  <Button
                    size="small"
                    className="md:px-3 md:py-2 md:text-sm"
                    onClick={handleAddItem}
                  >
                    Add to cart
                  </Button>
                )}

                {numInCart > 0 && (
                  <>
                    <span className="border-2 border-stone-200 px-2 py-1 text-sm font-medium md:px-3 md:py-2 md:text-sm">
                      {numInCart}
                    </span>
                    <Button
                      type="delete"
                      size="small"
                      className="font-bold md:px-3 md:py-2 md:text-sm"
                      onClick={handleRemove}
                    >
                      remove
                    </Button>
                    <Button
                      size="small"
                      className="md:px-3 md:py-2 md:text-sm"
                      onClick={handleAddMore}
                    >
                      Add another
                    </Button>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
