import {
    getOfficesbyCity,
    getOfficesFromSpain,
} from "./module/offices.js"



import {
    getInfoEmployeesByBoss,
    getBoss,
    getEmployeesDiff_from_SpecificPosition,
} from "./module/employees.js"



import {
    getSpainClients,
} from "./module/clients.js"



import {
    getRequestStatus,
} from "./module/requests.js"



import {
    getClientsCodeFromSpecificDate,
} from "./module/payments.js"

console.log(await getClientsCodeFromSpecificDate())