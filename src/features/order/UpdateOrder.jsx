import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { updateOrder } from "../../services/apiRestaurant";

UpdateOrder.propTypes = {
  order: PropTypes.any,
};

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH">
      <Button type="primary" size="small">
        Add Priority?
      </Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
