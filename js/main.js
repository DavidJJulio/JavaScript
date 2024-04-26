import {
    getOfficesbyCity,
    getOfficesFromSpain,
    getOfficesByEmployees,
} from "./module/offices.js"



import {
    getInfoEmployeesByBoss,
    getBoss,
    getEmployeesDiff_from_SpecificPosition,
    getEmployeeOfTheClient,
    getSalesManagerFromClients,
    getNameByClient,
} from "./module/employees.js"



import {
    getSpainClients,
    getClientsFromCityBySalesManagerCode,
    getClientsFromPayments,
    getClientsByPayments
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
    getPaymentsFromClients,
} from "./module/payments.js"



import {
    getProductsByGamaAndStock,
} from "./module/product.js"

console.log(await getOfficesByEmployees())

