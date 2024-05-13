import {
    getProductCodeByCodeRequest,
} from "./request_details.js"


// 15. Devuelve un listado con todos los productos 
// que pertenecen a la gama `Ornamentales` y que 
// tienen más de `100` unidades en stock. 
// El listado deberá estar ordenado por su precio de venta, 
// mostrando en primer lugar los de mayor precio.

export const getProductsByGamaAndStock = async() =>{
    let res = await fetch("http://localhost:5506/products?gama=Ornamentales")
    let data = await res.json();
    let result = [];
    let temporal = [];
    let temporal2 = [];
    let temporal3 = [];
    data.forEach(val =>{
        if(val.stock >= 100){
            temporal.push([val.price_sale, val.id])
            temporal2.push(Number(val.price_sale))
            temporal2.sort(function(a, b){return(b - a)})
        }
    })
    temporal2.forEach(val =>{
        temporal.forEach(val2 =>{
            if(val == val2[0]){
                temporal3.push(val2)
            }
        })
    })
    temporal3.forEach(val =>{
        data.forEach(val2 =>{
            if (val[1] == val2.id) {
                result.push(val2)
            }
        })
    })
    return result
}

// MULTITABLA 11. Devuelve un listado de las diferentes gamas de 
// producto que ha comprado cada cliente.

export const getGamaByCodeRequest = async() =>{
    let res = await fetch("http://localhost:5506/products")
    let data = await res.json();
    let res2 = await getProductCodeByCodeRequest();
    let result = [];
    res2.forEach(val =>{
        val.client_purchases.forEach(val2 =>{
            data.forEach(val3=>{
                if(val2.product_code == val3.code_product){
                    val2.product_gama = val3.gama
                }
            })
        })
    })
    return res2[0]
}