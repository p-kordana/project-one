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
        className="w-32 rounded-lg bg-amber-100 px-3 py-1 text-sm transition-all duration-300 placeholder:text-stone-400 focus:shadow-xl focus:outline-none sm:w-48 sm:focus:w-72"
      ></input>
    </form>
  );
}

export default OrderSearch;
