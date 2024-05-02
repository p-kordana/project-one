import { useNavigate } from "react-router-dom";
import CartItem from "../../features/cart/CartItem";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, getCart } from "./cartSlice";
import { getUser } from "../user/userSlice";

function Cart() {
  const username = useSelector(getUser);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!cart.length) return <EmptyCart></EmptyCart>;

  return (
    <div>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-8 text-lg font-semibold">
        Your cart, <span className="capitalize">{username}</span>
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((i) => (
          <CartItem key={i.pizzaId} item={i} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button className="mt-2 px-3" onClick={() => navigate("/order/new")}>
          Order pizzas
        </Button>
        <Button type="secondary" onClick={() => dispatch(emptyCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
