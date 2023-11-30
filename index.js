const url = `https://6549763ee182221f8d519550.mockapi.io/users/`;
const ul = document.getElementById("results");
const btnBuscar = document.getElementById("btnGet1");
const btnPost = document.getElementById("btnPost");
const inputBuscar = document.getElementById("inputGet1Id");


document.addEventListener("DOMContentLoaded", ()=>{

    fetch(url, {
        method: "GET",
    })
    .then(response => response.json())
    .then(users => {
        //console.log(users);
        users.forEach(element => {

            let name = element.name;
            let lastName = element.lastname;
            let id = element.id;

            ul.innerHTML += `
            <p> ID: ${id}<br>
            Nombre: ${name}<br>
            Apellido: ${lastName}</p>`
        })
    })
    .catch(error=> console.log(error))
})


btnBuscar.addEventListener("click", () => {

    let id = inputBuscar.value;
    if (id != 0){
        fetch(url + id, {
            method:"GET",
        })
        .then(response => response.json())
        .then(user => {

            let name = user.name;
            let lastName = user.lastname;
            let id = user.id;

            ul.innerHTML = `
            <p> ID: ${id}<br>
            Nombre: ${name}<br>
            Apellido: ${lastName}</p>`
        })
    }
})



btnPost.addEventListener("click", () => {

    let nombre = document.getElementById("inputPostNombre").value;
    let apellido = document.getElementById("inputPostApellido").value;

    if (nombre !='' && apellido !=''){

        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
              },
            method:"POST",
            body: JSON.stringify(
            {
                name: nombre,
                lastname: apellido,
            }
        )})
        .then(response => response.json())
        .then(user => {

            let name = user.name;
            let lastName = user.lastname;
            let id = user.id;

            ul.innerHTML = `
            <p> ID: ${id}<br>
            Nombre: ${name}<br>
            Apellido: ${lastName}</p>`
        })
    }
})


const btnPut = document.getElementById("btnPut");
btnPut.addEventListener("click", () => {
    let id = document.getElementById("inputPutId").value;
    let nombre = document.getElementById("inputPutNombre").value;
    let apellido = document.getElementById("inputPutApellido").value;

    if (id != 0 && nombre !== '' && apellido !== '') {
        fetch(url + id, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "PUT",
            body: JSON.stringify({
                name: nombre,
                lastname: apellido,
            })
        })
        .then(response => response.json())
        .then(user => {
            let name = user.name;
            let lastName = user.lastname;
            let id = user.id;

            ul.innerHTML = `
            <p> ID: ${id}<br>
            Nombre: ${name}<br>
            Apellido: ${lastName}</p>`
        })
        .catch(error => console.error('Error al actualizar el usuario:', error));
    }
});

const btnDelete = document.getElementById("btnDelete");
btnDelete.addEventListener("click", () => {
    let id = document.getElementById("inputDelete").value;
   

    if (id != 0) {
        fetch(url + id, {
            method: "DELETE",
        })
        .then(response =>  response.json())
        .then(user => {
            let name = user.name;
            let lastName = user.lastname;
            let id = user.id;

            ul.innerHTML = `
            <p> ID: ${id}<br>
            Nombre: ${name}<br>
            Apellido: ${lastName}</p>`
        })
        .catch(error => console.error('Error al intentar eliminar el usuario:', error));
    }
});
