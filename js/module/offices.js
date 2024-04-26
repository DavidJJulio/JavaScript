// 1. Devuelve un listado con el código de oficina 
// y la ciudad donde hay oficinas.

export const getOfficesbyCity = async() =>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        result.push({
            city: val.city,
            office_code: val.code_office,
        })
    })
    return result
}

// 2. Devuelve un listado con la ciudad y el 
// teléfono de las oficinas de España. 

export const getOfficesFromSpain = async() =>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        result.push({
            city: val.city,
            movil: val.movil
        })
    })
    return result
}

// MULTITABLA 4. Devuelve el nombre de los clientes 
// que han hecho pagos y el nombre de sus 
// representantes junto con la 
// ciudad de la oficina a la que 
// pertenece el representante.

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// MULTITABLA 5. Devuelve el nombre de los clientes que 
// **no** hayan hecho pagos y el nombre de sus representantes 
// junto con la ciudad de la oficina a la que 
// pertenece el representante.

import {
    getSalesManagerFromClients,
    getNameByClient,
} from "./employees.js"

export const getOfficesByEmployees = async() =>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json()
    let result = []
    let res2 = await getSalesManagerFromClients();
    data.forEach( val=>{
        res2.forEach(val2 =>{
            if(val2.code_office == val.code_office){
                result.push({
                    client_name: val2.client_name,
                    client_city: val2.client_city,
                    employee_name: val2.employee_name,
                    employee_lastname1: val2.employee_lastname1,
                    employee_lastname2: val2.employee_lastname2,
                    code_office: val.code_office,
                    office_city: val.city
                })
            }
        })
    })
    return result
}