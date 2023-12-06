const url = 
"https://api.github.com/users/EmanuelQuintino"
const gitHubUser = fetch(url)
.then((request) => request.json())
.then(({ name, bio }) =>
console.log({
    name: name,
    bio: bio,
})
)
.catch((error) => console.error(error))
.finally(() => console.log("Fim da requisição"));

console.log(gitHubUser);
console.log("Fim. Obrigado");