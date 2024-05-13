import {
    getClientCode,
} from "./clients.js"

// 7. Devuelve un listado con los distintos 
// estados por los que puede pasar un pedido.

export const getRequestStatus = async() =>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    let result = []
    data.forEach(val => {
        if (!result.includes(val.status)){
            result.push(val.status)
        }
    });
    return result
}

// 9. Devuelve un listado con el código de pedido, 
// código de cliente, fecha esperada y fecha de entrega 
// de los pedidos que no han sido entregados a tiempo.

export const getRetardedDeliveries = async() =>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    let suma = []
    let result = []
    data.forEach(val =>{
        if(val.date_delivery != null) {
            suma.push({
                code_request: val.code_request,
                code_client: val.code_client,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery,
                dateW: Number(val.date_wait.split('-')[0] + val.date_wait.split('-')[1] + val.date_wait.split('-')[2]),
                dateD: Number(val.date_delivery.split('-')[0] + val.date_delivery.split('-')[1] + val.date_delivery.split('-')[2])
            })
        } 
    })
    suma.forEach(val =>{
        if(val.dateD > val.dateW) {
            result.push({
                code_request: val.code_request,
                code_client: val.code_client,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery, 
            })
        }
    })
    return result
}

// 10. Devuelve un listado con el código de pedido, 
// código de cliente, fecha esperada y fecha 
// de entrega de los pedidos cuya fecha de 
// entrega ha sido al menos dos días 
// antes de la fecha esperada.

export const getRightDeliveries = async() =>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json()
    let suma = []
    let result = []
    data.forEach(val =>{
        if(val.date_delivery != null) {
            suma.push({
                code_request: val.code_request,
                code_client: val.code_client,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery,
                dateW: Number(val.date_wait.split('-')[0] + val.date_wait.split('-')[1] + val.date_wait.split('-')[2]),
                dateD: Number(val.date_delivery.split('-')[0] + val.date_delivery.split('-')[1] + val.date_delivery.split('-')[2])
            })
        } 
    })
    suma.forEach(val =>{
        if((val.dateW - val.dateD ) >=2) {
            result.push({
                code_request: val.code_request,
                code_client: val.code_client,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery, 
            })
        }
    })
    return result
}

// 11. Devuelve un listado de todos los pedidos 
// que fueron **rechazados** en `2009`.

export const getRejectedDeliveriesFromDate = async() =>{
    let res = await fetch("http://localhost:5508/requests?status=Rechazado")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if (val.date_request.split('-')[0] == 2009) {
            result.push(val)
        }
    })
    return result
}

// 12. Devuelve un listado de todos los pedidos que han sido 
// **entregados** en el mes de enero de cualquier año.

export const getJanuaryDeliveries = async() =>{
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        if(val.date_delivery != null){
            if (val.date_delivery.split('-')[1] == '01') {
                result.push(val)
            }
        } 
    })
    return result
}

// MULTITABLA 11. Devuelve un listado de las diferentes gamas de 
// producto que ha comprado cada cliente.

export const getRequestByClientCode = async() =>{
    let res = await fetch("http://localhost:5508/requests");
    let data = await res.json();
    let res2 = await getClientCode();
    let clientes = []
    let result = []
    data.forEach(val =>{
        res2.forEach(val2 =>{
            if(val.code_client == val2.client_code){
                if(!clientes.includes(val2.client_code)){
                    clientes.push(val2.client_code)
                }
            }
        })
    })
    clientes.forEach(val =>{
        result.push({
            client_code: val,
            client_purchases: []
        })
    })
    result.forEach(val =>{
        data.forEach(val2 =>{
            if(val.client_code == val2.code_client){
                val.client_purchases.push({
                    code_request: val2.code_request,
                    product_code: null,
                    product_gama: null
                })
            }
        }
        )
    })
    return result
}