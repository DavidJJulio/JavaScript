import {
    getSpainClients,
    getClientsFromCityBySalesManagerCode,
    getClientAndSellsAndEmployee,
    getClientsFromPayments,
    getClientsByPayments,
    getFromFuenlabrada,
    getRetardedDeliveryClients,
    getClientCode,
    getAllClients,
    getEmployeeByClients
} from "../module/clients.js"

import {
    getInfoEmployeesByBoss,
    getBoss,
    getEmployeesDiff_from_SpecificPosition,
    getEmployeeOfTheClient,
    getSalesManagerFromClients,
    getNameByClient,
    getEmployeeBoss,
    getAllEmploy,
    getEmployByCode,
    getAll3,
    getEmployeesWithoutClients,
    getEmployeesWithoutOffice,
    getEmployeesWithoutSomething,
} from "../module/employees.js"

import {
    getOfficesbyCity,
    getOfficesFromSpain,
    getOfficesByEmployees,
    getOfficesbyEmployeesWithoutClients,
} from "../module/offices.js"

import {
    getClientsCodeFromSpecificDate,
    getPaymentsPaypalByDate,
    getPaymentMethods,
    getPaymentsFromClients,
    getCode_Clients,
    getClientsWithoutPayments,
} from "../module/payments.js"

import {
    getProductsByGamaAndStock,
    getGamaByCodeRequest,
    getProductsWithoutRequests,
    getProductsAllWithoutRequests,
} from "../module/product.js"

import {
    getProductCodeByCodeRequest,
    getCodeProductsByRequests,
} from "../module/request_details.js"

import {
    getRequestStatus,
    getRetardedDeliveries,
    getRightDeliveries,
    getRejectedDeliveriesFromDate,
    getJanuaryDeliveries,
    getRequestByClientCode,
    getClientsWithoutRequests,
    getClientsWithoutPaymentsAndRequests,
} from "../module/requests.js"

export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.getSpainClientsDesign();
        this.shadowRoot.innerHTML = /* html */`
        <link rel="stylesheet" href="../css/myCard.css">
        `
    }
    async getSpainClientsDesign(){
        let data = await getSpainClients()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Clientes de españa</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre del cliente: </b>${val.client_name}</p>
                                    <p><b>Ciudad: </b>${val.client_country}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getClientsFromCityBySalesManagerCodeDesign(){
        let data = await getClientsFromCityBySalesManagerCode()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Clientes de españa</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre del cliente: </b>${val.client_name}</p>
                                    <p><b>Codigo del cliente: </b>${val.client_code}</p>
                                    <p><b>Nombre del contacto: </b>${val.contact_name}</p>
                                    <p><b>Apellido del contacto: </b>${val.contact_lastname}</p>
                                    <p><b>Direccion </b>${val.address1}</p>
                                    <p><b>Codigo postal: </b>${val.postal_code}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    static get observedAttributes(){
        return ["logic"]
    }
    attributeChangedCallback(name,old,now){
        if(name == "logic" && now == "client_1") this.getSpainClientsDesign();
        if(name == "logic" && now == "client_2") this.getClientsFromCityBySalesManagerCodeDesign();
    }
}