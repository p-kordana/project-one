import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const username = useSelector((state) => state.user.username);
  const navigate = useNavigate();

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 px-2 text-xl font-semibold sm:text-2xl md:text-3xl">
        The best pizza.
        <br />
        <span className="text-amber-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username ? (
        <CreateUser />
      ) : (
        <Button onClick={() => navigate("/menu")}>Resume Order</Button>
      )}
    </div>
  );
}

export default Home;
