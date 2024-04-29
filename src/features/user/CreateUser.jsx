import { useState } from "react";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-600 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <Input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-6 w-48 sm:w-72"
      />

      {username !== "" && (
        <div>
          <Button className="mt-3 px-3 py-2">Start ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
