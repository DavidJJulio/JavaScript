import "./components/clock.js";
import { Mycard } from "./components/myCard.js";
import { Mydetails } from "./components/myDetails.js";

customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)

let button = document.querySelectorAll("button");
let report__menu = document.querySelectorAll(".report__menu button");
let report__details = document.querySelector(".report__details")
console.log(button)

button.forEach(val=>{
    val.addEventListener("click", (e)=>{
        for(let valor of report__menu) valor.classList.remove('report__active');
        e.target.classList.add("report__active");
        
    if(e.target.innerHTML == "clients"){
        report__details.innerHTML = /*html*/`
        <my-details logic ="client_1" text ="6. Devuelve un listado con el nombre de los todos los clientes españoles. "></my-details>
        <my-details logic ="client_2" text ="16. Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30. "></my-details>
        <my-details logic ="client_3" text ="MULTITABLA 10. Devuelve el nombre de los clientes a los que no se les ha entregado a tiempo un pedido. "></my-details>
        `
    }
    if(e.target.innerHTML=="employees"){
        report__details.innerHTML = /*html*/`   
            <my-details logic ="employee_1" text ="3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7."></my-details>
            <my-details logic ="employee_2" text ="4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa."></my-details>
            <my-details logic ="employee_3" text ="MULTITABLA 3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details>
            <my-details logic ="employee_4" text ="5. Devuelve un listado que muestre solamente los empleados que no tienen un cliente asociado."></my-details>
            
        `
    }
    if(e.target.innerHTML=="gama"){
        report__details.innerHTML = /*html*/`   
            <h1>Nada que mostrar</h1>
            
        `
    }

    if(e.target.innerHTML=="offices"){
        report__details.innerHTML = /*html*/`
        <my-details logic ="offices_1" text ="1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas. "></my-details>
        <my-details logic ="offices_2" text ="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España. "></my-details>
        <my-details logic ="offices_3" text ="MULTITABLA 4. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante. "></my-details>
        `
    }

    if(e.target.innerHTML=="payments"){
        report__details.innerHTML = /*html*/`
            <h1>Aun no estan estas consultas</h1>
        `
    }

    if(e.target.innerHTML=="product"){
        report__details.innerHTML = /*html*/`
            <h1>Aun no estan estas consultas</h1>
        `
    }

    if(e.target.innerHTML=="request details"){
        report__details.innerHTML = /*html*/`
            <h1>Aun no estan estas consultas</h1>
        `
    }

    if(e.target.innerHTML=="requests"){
        report__details.innerHTML = /*html*/`
            <h1>Aun no estan estas consultas</h1>
        `
    }
    })
    
    
})