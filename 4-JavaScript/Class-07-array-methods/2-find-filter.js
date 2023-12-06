const students = [
    { id: 1, name: "João", average: 8, birth: 2005 },
    { id: 2, name: "Thiago", average: 6, birth: 2002 },
    { id: 3, name: "Jonas", average: 5, birth: 1998 },
    { id: 4, name: "Jonas", average: 9.75, birth: 2001 },
    { id: 5, name: "Rosa", average: 6, birth: 2004 },
    { id: 6, name: "Amanda", average: 8, birth: 1992 },
    { id: 7, name: "Pedro", average: 7, birth: 1998 },
  ];

  console.log(students.find((value) => {
    return value.id === 6 || value.id === 5
  }));

  console.log(students.find((value) => {
    return value.name === "Jonas" && value.name === "Thiago"
  }));

  console.log(students.find((value) => {
    return value.name === "Jonas" && value.birth >= 2000
  }));

  console.log(students.find(value => value.average >= 7));

//   IMUTABLE
  console.log(students.filter(value => value.average>= 7));

  const currentYear = new Date().getFullYear()
  console.log(currentYear);
  console.log(students.filter((value) => currentYear - value.birth <= 18));

  console.log(students);
const useName = prompt("Digite um nome...")
  console.log(students.filter( value => value.name.includes(useName)));