import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";
import Button from "../../ui/Button";
import { useSelector } from "react-redux";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const username = useSelector((state) => state.user.username);
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const formErrors = useActionData();
  console.log(formErrors);

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

        <div className="mb-2 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <Input className="w-full" type="text" name="address" required />
          </div>
        </div>

        <div className="mb-8">
          <Checkbox
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label className="font-medium" htmlFor="priority">
            Want to give your order priority?
          </label>
        </div>

        <div className="text-right">
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button disabled={isSubmitting}>
            {isSubmitting ? "Placing..." : "Order now"}
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
    priority: data.priority === "on",
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = "Please provide a valid phone number.";

  if (Object.keys(errors).length > 0) return errors;

  // if no errors, create order and redirect
  const newOrder = await createOrder(order);
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
