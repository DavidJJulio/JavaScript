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