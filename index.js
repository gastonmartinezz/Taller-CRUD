const url = `https://6549763ee182221f8d519550.mockapi.io/users`;
let urlBuscar = `https://6549763ee182221f8d519550.mockapi.io/users/${inputBuscar.value}`
const ul = document.getElementById("results");
const btnBuscar = document.getElementById("btnGet1");
const inputBuscar = document.getElementById("inputGet1Id");

fetch(url, "GET")
.then(response => response.json())
.then(users => {
    for (const i of users[i]) {
        let name = users[i].name;
        let lastName = users[i].lastname;
        let id = users[i].id;

        let li = document.createElement("li");

        li.innerHTML = 
        `
        <p> ID: ${id}</p>
        <p> NAME: ${name} </p>
        <p> LASTNAME: ${lastName} </p>
        `

        ul.appendChild = li;
    }
})

btnBuscar.addEventListener("click", () => {
    fetch(url, "GET")
    .then(response => response.json())
    .then(users => {
        
    })
})