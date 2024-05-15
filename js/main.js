import {
    getOfficesbyCity,
    getOfficesFromSpain,
    getOfficesByEmployees,
    getOfficesbyEmployeesWithoutClients,
} from "./module/offices.js"



import {
    getInfoEmployeesByBoss,
    getBoss,
    getEmployeesDiff_from_SpecificPosition,
    getEmployeeOfTheClient,
    getSalesManagerFromClients,
    getNameByClient,
    getEmployeeBoss,
    getAll3,
    getEmployeesWithoutOffice,
    getEmployeesWithoutClients,
    getEmployeesWithoutSomething
} from "./module/employees.js"



import {
    getSpainClients,
    getClientsFromCityBySalesManagerCode,
    getClientsFromPayments,
    getClientsByPayments,
    getFromFuenlabrada,
    getRetardedDeliveryClients,
    getClientCode,
    getAllClients,
    getEmployeeByClients,
} from "./module/clients.js"



import {
    getRequestStatus,
    getRetardedDeliveries,
    getRightDeliveries,
    getRejectedDeliveriesFromDate,
    getJanuaryDeliveries,
    getRequestByClientCode,
    getClientsWithoutRequests,
    getClientsWithoutPaymentsAndRequests,
} from "./module/requests.js"

import {
    getProductCodeByCodeRequest,
    getCodeProductsByRequests,
} from "./module/request_details.js"

import {
    getClientsCodeFromSpecificDate,
    getPaymentMethods,
    getPaymentsPaypalByDate,
    getPaymentsFromClients,
    getClientsWithoutPayments,
} from "./module/payments.js"



import {
    getProductsByGamaAndStock,
    getGamaByCodeRequest,
    getProductsWithoutRequests,
} from "./module/product.js"

console.log(await getProductsWithoutRequests())

