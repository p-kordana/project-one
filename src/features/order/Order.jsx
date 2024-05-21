import OrderItem from "./OrderItem";
// Test ID: IIDSAT
import { useFetcher, useLoaderData } from "react-router-dom";

import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { getOrder } from "../../services/apiRestaurant";
import { useEffect } from "react";

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();
  const fetcher = useFetcher();

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu");
    },
    [fetcher],
  );

  return (
    <div className="">
      {/* order information */}
      <div className="flex flex-wrap items-center justify-between gap-2 py-4">
        <h2 className="text-lg font-semibold">Order# {id}</h2>
        <div className="space-x-2 capitalize">
          {priority && (
            <span className="rounded-full bg-red-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-50">
              Priority
            </span>
          )}
          <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-50">
            order {status}
          </span>
        </div>
      </div>

      {/* delivery information */}
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-t-md bg-stone-200 px-6 py-4">
        <p className="font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p className="text-xs text-stone-500">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      {/* cart list */}
      <ul className="divide-y border-x py-2">
        {cart.map((i) => (
          <OrderItem
            key={i.pizzaId}
            item={i}
            isLoadingIngredients={fetcher.state === "loading"}
            ingredients={
              fetcher.data?.find((item) => item.id === i.pizzaId).ingredients ??
              []
            }
          />
        ))}
      </ul>

      {/* subtotal */}
      <div className="space-y-2 rounded-b-md bg-stone-200 px-6 py-4">
        <p className="text-xs font-semibold text-stone-500">
          Pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-xs font-semibold text-stone-500">
            Priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-sm font-bold">
          Total Due: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export async function loader({ params }) {
  const menu = await getOrder(params.orderId);
  return menu;
}

export default Order;
