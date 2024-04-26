// 8. Devuelve un listado con el código de cliente 
// de aquellos clientes que realizaron algún pago en 2008. 
// Tenga en cuenta que deberá eliminar aquellos 
// códigos de cliente que aparezcan repetidos. 
// Resuelva la consulta:

export const getClientsCodeFromSpecificDate = async() =>{
    let res = await fetch("http://localhost:5505/payments")
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
    let res = await fetch("http://localhost:5505/payments?payment=PayPal")
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
    let res = await fetch("http://localhost:5505/payments")
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

export const getPaymentsFromClients = async() =>{
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let result = [];
    data.forEach(val =>{
        if(!result.includes(val.code_client)){
            result.push(val.code_client)
        }
        
    })
    return result
}
