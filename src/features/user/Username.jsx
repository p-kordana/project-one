import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  // add an onClick handler to log out?

  if (!username) return null;

  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
