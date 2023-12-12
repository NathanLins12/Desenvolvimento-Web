import { useContext } from "react";
import { UserContext } from "../contexts/UserContexts";

export function Button() {
  const { setName } = useContext(UserContext);
  return (
    <>
      <button onClick={() => setName("Lins")}>Change name</button>
    </>
  );
}
