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