// 1. Devuelve un listado con el código de oficina 
// y la ciudad donde hay oficinas.

export const getOfficesbyCity = async() =>{
    let res = await fetch("http://localhost:5504/offices")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        result.push({
            city: val.city,
            office_code: val.code_office,
        })
    })
    return result
}

// 2. Devuelve un listado con la ciudad y el 
// teléfono de las oficinas de España. 

export const getOfficesFromSpain = async() =>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json()
    let result = []
    data.forEach(val =>{
        result.push({
            city: val.city,
            movil: val.movil
        })
    })
    return result
}