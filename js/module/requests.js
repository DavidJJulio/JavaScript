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