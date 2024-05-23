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
                            <div>Clientes de Madrid con representante 11 o 30</div>
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
    async getInfoEmployeesByBossDesign(){
        let data = await getInfoEmployeesByBoss()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Empleados cuyo Jefe tenga el código 7</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre: </b>${val.name}</p>
                                    <p><b>Apellido 1 del contacto: </b>${val.lastname1}</p>
                                    <p><b>Apellido 2 del contacto: </b>${val.lastname2}</p>
                                    <p><b>Correo: </b>${val.email}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getBossDesign(){
        let data = await getBoss()
        this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Jefe de la empresa</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre: </b>${data[0].name}</p>
                                    <p><b>Apellido 1 del contacto: </b>${data[0].lastname1}</p>
                                    <p><b>Apellido 2 del contacto: </b>${data[0].lastname2}</p>
                                    <p><b>Correo: </b>${data[0].email}</p>
                                </div>
                        </div>
                </div>
                        `;
    }
    async getRetardedDeliveryClientsDesign(){
        let data = await getRetardedDeliveryClients()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Empleados que tengan oficina en Fuenlabrada</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre: </b>${val.client_name}</p>
                                    <p><b>Codigo del cliente: </b>${val.client_code}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getNameByClientDesign(){
        let data = await getNameByClient()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Empleados que tengan oficina en Fuenlabrada</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre: </b>${val.client_name}</p>
                                    <p><b>Nombre del empleado: </b>${val.employee_name}</p>
                                    <p><b>Apellido del empleado: </b>${val.employee_lastname1}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getEmployeesWithoutClientsDesign(){
        let data = await getEmployeesWithoutClients()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Empleados que tengan oficina en Fuenlabrada</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre: </b>${val.name}</p>
                                    <p><b>Apellido del empleado: </b>${val.employee_lastname1}</p>
                                    <p><b>Email: </b>${val.email}</p>
                                    <p><b>Posicion: </b>${val.position}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getOfficesbyCityDesign(){
        let data = await getOfficesbyCity()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Empleados que tengan oficina en Fuenlabrada</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Ciudad: </b>${val.city}</p>
                                    <p><b>Codigo de la oficina: </b>${val.code_office}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getOfficesFromSpainDesign(){
        let data = await getOfficesFromSpain()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Empleados que tengan oficina en Fuenlabrada</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Ciudad: </b>${val.city}</p>
                                    <p><b>Movil: </b>${val.movil}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getOfficesByEmployeesDesign(){
        let data = await getOfficesByEmployees()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Empleados que tengan oficina en Fuenlabrada</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre del cliente: </b>${val.client_name}</p>
                                    <p><b>Ciudad del cliente: </b>${val.client_city}</p>
                                    <p><b>Nombre del empleado: </b>${val.employee_name}</p>
                                    <p><b>Apellido del empleado: </b>${val.employee_lastname1}</p>
                                    <p><b>Apellido del empleado: </b>${val.employee_lastname2}</p>
                                    <p><b>Codigo de la oficina: </b>${val.code_office}</p>
                                    <p><b>Ciudad de la oficina: </b>${val.office_city}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    
    static get observedAttributes(){
        return ["logic"]
    }
    async attributeChangedCallback(name,old,now){
        if (name === "logic") {
            if (now === "client_1") await this.getSpainClientsDesign();
            if (now === "client_2") await this.getClientsFromCityBySalesManagerCodeDesign();
            if (now === "client_3") await this.getRetardedDeliveryClientsDesign();
            if (now === "employee_1") await this.getInfoEmployeesByBossDesign();
            if (now === "employee_2") await this.getBossDesign();
            if (now === "employee_3") await this.getNameByClientDesign();
            if (now === "employee_4") await this.getEmployeesWithoutClientsDesign();
            if (now === "offices_1") await this.getOfficesbyCityDesign();
            if (now === "offices_2") await this.getOfficesFromSpainDesign();
            if (now === "offices_3") await this.getOfficesByEmployeesDesign();


        }
    }
}
