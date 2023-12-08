import { CardProfile } from "../components/CardProfile";

export function App() {
function calcAge(birth: string) {
  const dateNow = new Date().getTime();
  const dateBirth = new Date(birth).getTime();
  const userAge = dateNow - dateBirth;
  return Math.floor(userAge / (1000 * 60 * 60 * 24 * 365.25));
}

  const dataAPI = [
    { id: 1, name: "Nathan", birth: "01-05-2006" },
    { id: 2, name: "daniel", birth: "05-26-2007" },
    { id: 3, name: "Jonatas", birth: "12-12-2004" },
    { id: 4, name: "Jorjão", birth: "01-23-1995" },
  ];

  return (
    <>
      <h1>Class 02 components</h1>
      {dataAPI.map(({ id, name, birth }) => {
        return (
          <CardProfile key={id} name={name} birth={birth} calcAge={calcAge} />
        );
      })}
    </>
  );
}
