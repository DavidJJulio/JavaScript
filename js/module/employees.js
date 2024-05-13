// 3. Devuelve un listado con el nombre, 
// apellidos y email de los empleados 
// cuyo jefe tiene un código de jefe igual a 7.

export const getInfoEmployeesByBoss = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if (val.code_boss == 7){
            let emailtemp = val.email.split('(')[0]
            emailtemp = emailtemp.replace('[', '')
            emailtemp = emailtemp.replace(']', '')
            result.push({
                name: val.name,
                lastname1: val.lastname1,
                lastname2: val.lastname2,
                email: emailtemp,
            })
        }
    })
    return result
}

// 4. Devuelve el nombre del puesto, 
// nombre, apellidos y email del jefe de la empresa.

export const getBoss = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if (val.code_boss == null) {
            let emailtemp = val.email.split('(')[0]
            emailtemp = emailtemp.replace('[', '')
            emailtemp = emailtemp.replace(']', '')
            result.push({
                name: val.name,
                lastname1: val.lastname1,
                lastname2: val.lastname2,
                email: emailtemp,
            })
        }
    })
    return result
}

// 5. Devuelve un listado con el nombre, apellidos y puesto de 
// aquellos empleados que no sean representantes de ventas.

export const getEmployeesDiff_from_SpecificPosition = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if(val.position != "Representante Ventas"){
            result.push({
                name: val.name,
                lastname1: val.lastname1,
                lastname2: val.lastname2,
                position: val.position,
            })
        }
    })
    return result
}

// MULTITABLA 1. Obtén un listado con el nombre de cada 
// cliente y el nombre y apellido de su representante de ventas.

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// MULTITABLA 7. Devuelve el nombre de los clientes y 
// el nombre de sus representantes junto con la 
// ciudad de la oficina a la que pertenece el representante.

import {
    getClientAndSellsAndEmployee
} from "./clients.js"

export const getEmployeeOfTheClient = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let res2 = await getClientAndSellsAndEmployee()
    let data = await res.json();
    let result = []
    data.forEach(val =>{
        res2.forEach(val2 =>{
            if(val2.code_employee_sales_manager == val.employee_code){
                result.push({
                    client_name: val2.client_name,
                    employee_name: val.name,
                    employee_lastname1: val.lastname1,
                    employee_lastname2: val.lastname2,
                    code_office: val.code_office,
                    employee_code: val.employee_code
                })
            }
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

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// MULTITABLA 6. Lista la dirección de las 
// oficinas que tengan clientes en `Fuenlabrada`.

import {
    getClientsFromPayments,
    getFromFuenlabrada,
} from "./clients.js"



export const getSalesManagerFromClients = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let res2 = await getFromFuenlabrada()
    let data = await res.json();
    let result = []
    data.forEach(val =>{
        res2.forEach(val2 =>{
            if(val.employee_code == val2.code_employee_sales_manager){
                result.push({
                    client_name: val2.client_name,
                    client_city: val2.client_city,
                    employee_name: val.name,
                    employee_lastname1: val.lastname1,
                    employee_lastname2: val.lastname2,
                    code_office: val.code_office
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
    getClientsByPayments,
} from "./clients.js"

export const getNameByClient = async() =>{
    let res = await fetch("http://localhost:5502/employees")
    let res2 = await getClientsByPayments()
    let data = await res.json();
    let result = []
    data.forEach(val =>{
        res2.forEach(val2 =>{
            if(val.employee_code == val2.code_employee_sales_manager){
                result.push({
                    client_name: val2.client_name,
                    employee_name: val.name,
                    employee_lastname1: val.lastname1,
                    employee_lastname2: val.lastname2,
                    code_office: val.code_office
                })
            }
        })
    })
    return result
}

// MULTITABLA 8. Devuelve un listado con el nombre de los 
// empleados junto con el nombre de sus jefes.

export const getEmployeeBoss = async() =>{
    let res = await fetch("http://localhost:5502/employees");
    let data = await res.json();
    let result = []
    data.forEach(val =>{
        result.push({
            name: val.name,
            lastname: val.lastname1,
            code_boss: val.code_boss
        })
    })

    result.forEach(val =>{
        data.forEach(Boss=>{
            if(val.code_boss == Boss.employee_code){
                val.code_boss = {Boss}
            }
        })
    })
    return result
}

// Obtener la informacion de un empleado por su codigo
export const getAllEmploy = async() =>{
    let res = await fetch(`http://localhost:5502/employees`);
    let data = await res.json();
    return data;
}

export const getEmployByCode = async(code) =>{
    let res = await fetch(`http://localhost:5502/employees?employee_code=${code}`);
    let dataClients = await res.json();
    return dataClients;
}

// 9. Devuelve un listado que muestre el nombre de cada empleados, 
// el nombre de su jefe y el nombre del jefe de sus jefe.

export const getAll3 = async()=>{
    let dataEmployees = await getAllEmploy();
    for (let i = 0; i < dataEmployees.length; i++) {
        let {code_boss} = dataEmployees[i]
        let listBoss = [];
        if(!code_boss) continue 
        do{
            let searchedBoss = async() => await getEmployByCode(code_boss)
            let [boos] = await searchedBoss()
            code_boss = boos.code_boss
            listBoss.push(boos)
        }while(code_boss)
        dataEmployees[i].code_boss = listBoss;
    }
    return dataEmployees;
}