import { useState } from "react";
import { Button } from "./components/Button";
import { UserCard } from "./components/UserCard";
import { UserContext } from "./contexts/UserContexts";

export function App() {
  const [name, setName] = useState("Nathan");

  return (
    <UserContext.Provider value={{ name, setName }}>
      <h1>Class 04 contexts</h1>
      <UserCard />
      <Button />
    </UserContext.Provider>
  );
}
