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
