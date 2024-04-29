import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OrderSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-32 rounded-lg border-stone-400 bg-stone-100 px-3 py-1 text-sm outline outline-1 outline-stone-400 transition-all duration-300 placeholder:text-stone-400 focus:bg-amber-100 focus:shadow-xl focus:outline-none sm:w-48 sm:focus:w-72"
      ></input>
    </form>
  );
}

export default OrderSearch;
