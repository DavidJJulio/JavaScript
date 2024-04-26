// 6. Devuelve un listado con el nombre de los 
// todos los clientes españoles.

export const getSpainClients = async() =>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json()
    let result = []
    data.forEach(val => {
        result.push({
            client_name: val.client_name,
        })
    });
    return result
}   

// 16. Devuelve un listado con todos los clientes 
// que sean de la ciudad de `Madrid` y cuyo 
// representante de ventas tenga el 
// código de empleado `11` o `30`.

export const getClientsFromCityBySalesManagerCode = async() =>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if(val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30)
        result.push(val)
    })
    return result
}

// MULTITABLA 1. Obtén un listado con el nombre de cada 
// cliente y el nombre y apellido de su representante de ventas.

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// MULTITABLA 7. Devuelve el nombre de los clientes y 
// el nombre de sus representantes junto con la 
// ciudad de la oficina a la que pertenece el representante.

export const getClientAndSellsAndEmployee = async() =>{
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        result.push({
            client_name: val.client_name,
            code_employee_sales_manager: val.code_employee_sales_manager
        })
    })
    return result
}

// MULTITABLA 2. Muestra el nombre de los 
// clientes que hayan realizado pagos 
// junto con el nombre de sus representantes de ventas.

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// MULTITABLA 4. Devuelve el nombre de los clientes 
// que han hecho pagos y el nombre de sus 
// representantes junto con la 
// ciudad de la oficina a la que 
// pertenece el representante.

import {
    getPaymentsFromClients,
} from "./payments.js"



export const getClientsFromPayments = async() =>{
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json()
    let res2 = await getPaymentsFromClients()
    let result = []
    data.forEach(val =>{
        res2.forEach(val2 =>{
            if(val.client_code == val2){
                result.push({
                    client_name: val.client_name,
                    code_employee_sales_manager: val.code_employee_sales_manager
                })
            }
        })
    })
    return result
}

// MULTITABLA 3. Muestra el nombre de los clientes 
// que **no** hayan realizado 
// pagos junto con el nombre de sus representantes de ventas.

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// MULTITABLA 5. Devuelve el nombre de los clientes que 
// **no** hayan hecho pagos y el nombre de sus representantes 
// junto con la ciudad de la oficina a la que 
// pertenece el representante.

import {
    getCode_Clients,
} from "./payments.js"



export const getClientsByPayments = async() =>{
    let res = await fetch("http://localhost:5501/clients")
    let data = await res.json()
    let res2 = await getCode_Clients()
    let temporal = []
    let temporal2 = []
    let result = []
    data.forEach(val =>{
        temporal.push(val.client_code)
    })
    for(const[index, value] of temporal.entries()){
        for(const[i, val] of res2.entries()){
            if(value == val){
                delete(temporal[index])
            }
        }
    }
    temporal.forEach(val =>{
        temporal2.push(val)
    })
    temporal2.forEach(val =>{
        for(const[index, value] of data.entries()){
            if(val == value.client_code){
                result.push({
                    client_name: value.client_name,
                    code_employee_sales_manager: value.code_employee_sales_manager
                })
            }
        }
    })
    return result
}

// MULTITABLA 6. Lista la dirección de las 
// oficinas que tengan clientes en `Fuenlabrada`.

export const getFromFuenlabrada = async() =>{
    let res = await fetch("http://localhost:5501/clients?city=Fuenlabrada")
    let data = await res.json()
    let res2 = await getPaymentsFromClients()
    let result = []
    data.forEach(val =>{
        res2.forEach(val2 =>{
            if(val2  == val.client_code){
                result.push({
                    client_code: val.client_code,
                    client_name: val.client_name,
                    client_city: val.city,
                    code_employee_sales_manager: val.code_employee_sales_manager
                })
            }
        })
    })
    return result
}

