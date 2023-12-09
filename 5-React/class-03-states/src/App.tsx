import { ChangeEvent, useEffect, useState } from "react";

type UserData = {
  name: string;
  avatar_url: string;
  bio: string;
} 

export function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState<UserData>({} as UserData);

  function addCount() {
    // Closures
    setCount((prevState) => prevState + 1);
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event?.target.value);
    console.log(event);
  }

  useEffect(() => {
    // Hook
    fetch(`https://api.github.com/users/${name}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [name]);

  return (
    <>
      <h1>Class 03 States</h1>
      <p>name: {name}</p>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add&gt;</button>
      <input type="text" onChange={handleChangeName} />
      {data && (
        <section>
          <h2>{data.name}</h2>
          <img src={data.avatar_url} alt="" />
          <p>{data.bio}</p>
        </section>
      )}
    </>
  );
}
