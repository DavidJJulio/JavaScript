import {
    getOfficesbyCity,
    getOfficesFromSpain,
} from "./module/offices.js"



import {
    getInfoEmployeesByBoss,
    getBoss,
    getEmployeesDiff_from_SpecificPosition,
    getEmployeeOfTheClient,
} from "./module/employees.js"



import {
    getSpainClients,
    getClientsFromCityBySalesManagerCode,
} from "./module/clients.js"



import {
    getRequestStatus,
    getRetardedDeliveries,
    getRightDeliveries,
    getRejectedDeliveriesFromDate,
    getJanuaryDeliveries,
} from "./module/requests.js"



import {
    getClientsCodeFromSpecificDate,
    getPaymentMethods,
    getPaymentsPaypalByDate,
} from "./module/payments.js"



import {
    getProductsByGamaAndStock,
} from "./module/product.js"

console.log(await getEmployeeOfTheClient())

