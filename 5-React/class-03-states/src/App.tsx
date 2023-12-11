import { ChangeEvent, useEffect, useState } from "react";

type UserData = {
  name: string;
  avatar_url: string;
  bio: string;
};

export function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("NathanLins12");
  const [auxName, setAuxName] = useState("");
  const [data, setData] = useState<UserData>({} as UserData);

  let count = 0;
  console.log(count);

  function addCount() {
    // Closures
    setCount((prevState) => prevState + 1);
  }

  function handleChangeName(event: ChangeEvent<HTMLInputElement>) {
    setName(event?.target.value);
    console.log(event);
  }

  function handleSubmit() {
    event?.preventDefault()
    setAuxName(name);
  }

  useEffect(() => {
    // Hook
    fetch(`https://api.github.com/users/${auxName}`)
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log("effect");
  }, [name]);

  console.log(data);

  return (
    <>
      <h1>Class 03 States</h1>
      <p>name: {name}</p>
      <p>Count: {count}</p>
      <button onClick={addCount}>Add&gt;</button>

      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", marginTop: 24 }}
      >
        <input type="text" onChange={handleChangeName} />
        <button>Pesquisar</button>
      </form>

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
