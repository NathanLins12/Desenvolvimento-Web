import { useContext } from "react";
import { UserContext } from "../contexts/UserContexts";

export function UserCard() {
  const { name } = useContext(UserContext);
  return (
    <>
      <h1>{name}</h1>
      <p>Web Developer</p>
    </>
  );
}
