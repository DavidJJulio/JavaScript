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
        `
    }
    if(e.target.innerHTML=="employees"){
        report__details.innerHTML = /*html*/`   
            <my-details logic ="employee_1" text ="3. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7."></my-details>
            <my-details logic ="employee_2" text ="4. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa."></my-details>
            
        `
    }
    if(e.target.innerHTML=="gama"){
        report__details.innerHTML = /*html*/`   
            <h1>Aun no estan estas consultas</h1>
        `
    }

    if(e.target.innerHTML=="offices"){
        report__details.innerHTML = /*html*/`
            <h1>Aun no estan estas consultas</h1>
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