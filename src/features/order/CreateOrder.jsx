import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart, getCart, getCartPrice } from "../cart/cartSlice";
import { fetchAddress, getUser } from "../user/userSlice";
import store from "../../store";
import { formatCurrency } from "../../utils/helpers";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const priorityMod = 0.2;

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {
    username,
    status: addressStatus,
    position,
    address,
  } = useSelector(getUser);
  const isLoadingAddress = addressStatus === "loading";
  const cart = useSelector(getCart);
  const cartPrice = useSelector(getCartPrice);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const priorityPrice = withPriority ? cartPrice * priorityMod : 0;
  const totalCartPrice = cartPrice + priorityPrice;
  const formErrors = useActionData();
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div>
      <h2 className="mb-6 text-center font-serif text-lg lowercase italic text-amber-500 sm:mb-8 sm:text-2xl">
        {"Ready to order? Let's go!"}
      </h2>

      <Form method="POST">
        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Name</label>
          <Input
            className="grow"
            type="text"
            name="customer"
            defaultValue={username}
            required
          />
        </div>

        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <Input className="w-full" type="tel" name="phone" required />
            {formErrors?.phone && (
              <p className="text-xs text-red-400">{formErrors.phone}</p>
            )}
          </div>
        </div>

        <div className="relative mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <Input
              className="w-full"
              type="text"
              name="address"
              defaultValue={address}
              disabled={isLoadingAddress}
              required
            />
            {!position.latitude && !position.longitude && (
              <span className="absolute bottom-1 right-1 z-10">
                <Button
                  type="primary"
                  size="small"
                  className="rounded-md"
                  disabled={isLoadingAddress}
                  onClick={(e) => {
                    e.preventDefault();
                    dispatch(fetchAddress());
                  }}
                >
                  Get address
                </Button>
              </span>
            )}
          </div>
        </div>

        <div className="mb-8">
          <Checkbox
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to give your order priority?
          </label>
        </div>

        <div className="flex items-center justify-end gap-2">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <div className="rounded-md border-2 border-stone-200 bg-stone-100 px-2 py-2 text-sm font-medium md:px-3 md:text-base">
            Cart Total: {formatCurrency(totalCartPrice)}
          </div>
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing..." : `Order now `}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please provide a valid phone number.";

  if (Object.keys(errors).length > 0) return errors;

  // if no errors, create order and redirect
  const newOrder = await createOrder(order);
  store.dispatch(emptyCart());
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
