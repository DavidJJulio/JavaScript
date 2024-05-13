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
    getEmployeeBoss,
    getAll3
} from "./module/employees.js"



import {
    getSpainClients,
    getClientsFromCityBySalesManagerCode,
    getClientsFromPayments,
    getClientsByPayments,
    getFromFuenlabrada,
    getRetardedDeliveryClients,
    getClientCode,
} from "./module/clients.js"



import {
    getRequestStatus,
    getRetardedDeliveries,
    getRightDeliveries,
    getRejectedDeliveriesFromDate,
    getJanuaryDeliveries,
    getRequestByClientCode,
} from "./module/requests.js"

import {
    getProductCodeByCodeRequest,
} from "./module/request_details.js"

import {
    getClientsCodeFromSpecificDate,
    getPaymentMethods,
    getPaymentsPaypalByDate,
    getPaymentsFromClients,
} from "./module/payments.js"



import {
    getProductsByGamaAndStock,
    getGamaByCodeRequest,
} from "./module/product.js"

console.log(await getGamaByCodeRequest())

