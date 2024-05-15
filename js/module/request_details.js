import {
    getRequestByClientCode,
} from "./requests.js"

// MULTITABLA 11. Devuelve un listado de las diferentes gamas de 
// producto que ha comprado cada cliente.

export const getProductCodeByCodeRequest = async() =>{
    let res = await fetch("http://localhost:5507/request_details")
    let data = await res.json();
    let res2 = await getRequestByClientCode();
    res2.forEach(val => {
        val.client_purchases.forEach(val2 =>{
            data.forEach(val3=>{
                if(val3.code_request == val2.code_request) {
                    val2.product_code = val3.product_code
                }
            })
        })
    });
    return res2
}

// 8. Devuelve un listado de los productos 
// que nunca han aparecido en un pedido.

export const getCodeProductsByRequests = async() =>{
    let res = await fetch("http://localhost:5507/request_details")
    let data = await res.json();
    let result = []
    data.forEach(val =>{
        if(!result.includes(val.product_code)){
            result.push(val.product_code)
        }
    })
    return result
}