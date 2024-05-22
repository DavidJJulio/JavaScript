import {
    getAllClients,
} from "./clients.js"


// 8. Devuelve un listado con el código de cliente 
// de aquellos clientes que realizaron algún pago en 2008. 
// Tenga en cuenta que deberá eliminar aquellos 
// códigos de cliente que aparezcan repetidos. 
// Resuelva la consulta:

export const getClientsCodeFromSpecificDate = async() =>{
    let res = await fetch("http://172.16.101.146:5485/payments")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if(val.date_payment.split('-')[0] == 2008){
            if(!result.includes(val.code_client)){
                result.push(val.code_client)
            }
        }
    })
    return result
}

// 13. Devuelve un listado con todos los 
// pagos que se realizaron en el año 
// `2008` mediante `Paypal`. Ordene el 
// resultado de mayor a menor.

export const getPaymentsPaypalByDate = async() =>{
    let res = await fetch("http://172.16.101.146:5485/payments?payment=PayPal")
    let data = await res.json();
    let result = []
    let Temporal2 = []
    let Temporal = []
    let Temporal3 = []
    data.forEach(val =>{
        if(val.date_payment.split('-')[0] == 2008){
            Temporal.push([val.id, Number(val.date_payment.split('-')[0] + val.date_payment.split('-')[1] + val.date_payment.split('-')[2])])
            Temporal2.push(Number(val.date_payment.split('-')[0] + val.date_payment.split('-')[1] + val.date_payment.split('-')[2]))
            Temporal2.sort(function(a, b){return(b - a)})
        }
    })
    Temporal2.forEach(val =>{
        Temporal.forEach(val2 =>{
            if (val == val2[1]){
                Temporal3.push([val, val2[0]])
            }
        })
    })
    Temporal3.forEach(val =>{
        data.forEach(val2 =>{
            if(val[1] == val2.id){
                result.push(val2)
            }
        })
    })
    return result
}

// 14. Devuelve un listado con todas las formas de pago 
// que aparecen en la tabla `pago`. 
// Tenga en cuenta que no deben aparecer 
// formas de pago repetidas.

export const getPaymentMethods = async() =>{
    let res = await fetch("http://172.16.101.146:5485/payments")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if(!result.includes(val.payment)) {
            result.push(val.payment)
        }
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

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// MULTITABLA 6. Lista la dirección de las 
// oficinas que tengan clientes en `Fuenlabrada`.


export const getPaymentsFromClients = async() =>{
    let res = await fetch("http://172.16.101.146:5485/payments")
    let data = await res.json();
    let result = [];
    data.forEach(val =>{
        if(!result.includes(val.code_client)){
            result.push(val.code_client)
        }
        
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

export const getCode_Clients = async() =>{
    let res = await fetch("http://172.16.101.146:5485/payments")
    let data = await res.json();
    let result = [];
    data.forEach(val =>{
        if(!result.includes(val.code_client)){
            result.push(val.code_client)
        }
        
    })
    return result
}

// MULTITABLA EXTERNA 1. Devuelve un listado que muestre solamente 
// los clientes que no han realizado ningún pago.

export const getClientsWithoutPayments = async() =>{
    let res = await fetch("http://172.16.101.146:5485/payments")
    let data = await res.json();
    let result = [];
    let res2 = await getAllClients();
    let Verificador = []
    let clients = []
    data.forEach(val =>{
        res2.forEach(val2 =>{
            if(val.code_client == val2.client_code){
                if(!Verificador.includes(val2.client_code)){
                    Verificador.push(val2.client_code) 
                }
                
            }
        })
    })
    res2.forEach(val =>{
        Verificador.forEach(val2 =>{
            if(!Verificador.includes(val.client_code) && !clients.includes(val.client_code)){
                clients.push(val.client_code)
            }
        })
    })
    res2.forEach(val =>{
        clients.forEach(val2 =>{
            if(val.client_code == val2){
                result.push(val)
            }
        })
    })
    return result
}


