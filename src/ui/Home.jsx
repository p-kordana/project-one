import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="my-10 text-center sm:my-16">
      <h1 className="mb-8 px-2 text-xl font-semibold sm:text-2xl md:text-3xl">
        The best pizza.
        <br />
        <span className="text-amber-500">
          Straight out of the oven, straight to you.
        </span>
      </h1>

      {!username && <CreateUser />}
    </div>
  );
}

export default Home;
