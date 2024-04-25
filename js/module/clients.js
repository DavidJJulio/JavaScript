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
