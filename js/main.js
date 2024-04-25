import {
    getOfficesbyCity,
    getOfficesFromSpain,
} from "./module/offices.js"



import {
    getInfoEmployeesByBoss,
    getBoss,
    getEmployeesDiff_from_SpecificPosition,
} from "./module/employees.js"



console.log(await getEmployeesDiff_from_SpecificPosition())