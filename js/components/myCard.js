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
                            <div>Clientes con pedido retrasado</div>
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
                            <div>Nombre y empleado de clientes que no hayan realizado pago</div>
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
                            <div>Empleados sin cliente </div>
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
                            <div>Oficinas y su ciudad</div>
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
                            <div>Oficinas de España</div>
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
                            <div>Oficinas de empleados</div>
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
    async getEmployeesDiff_from_SpecificPositionDesign(){
        let data = await getEmployeesDiff_from_SpecificPosition()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Empleados de una posicion especifica</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre del Empleado: </b>${val.name}</p>
                                    <p><b>Apellido del empleado: </b>${val.employee_lastname1}</p>
                                    <p><b>Apellido del empleado: </b>${val.employee_lastname2}</p>
                                    <p><b>Posicion: </b>${val.position}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getEmployeeOfTheClientDesign(){
        let data = await getEmployeeOfTheClient()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Empleados de un cliente</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre del Cliente: </b>${val.name}</p>
                                    <p><b>Nombre del Empleado: </b>${val.employee_name}</p>
                                    <p><b>Apellido del empleado: </b>${val.employee_lastname1}</p>
                                    <p><b>Apellido del empleado: </b>${val.employee_lastname2}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getRequestStatusDesign(){
        let data = await getRequestStatus()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Estados de un pedido</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Estado: </b>${val}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getClientsCodeFromSpecificDateDesign(){
        let data = await getClientsCodeFromSpecificDate()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Codigo de clientes que realizaron algun pago en 2008</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Cliente: </b>${val}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getRetardedDeliveriesDesign(){
        let data = await getRetardedDeliveries()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Pedidos retardados</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Codigo del cliente: </b>${val.code_client}</p>
                                    <p><b>Codigo del pedido: </b>${val.code_request}</p>
                                    <p><b>Fecha esperada: </b>${val.date_wait}</p>
                                    <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getRightDeliveriesDesign(){
        let data = await getRightDeliveries()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Pedidos adelantados</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Codigo del cliente: </b>${val.code_client}</p>
                                    <p><b>Codigo del pedido: </b>${val.code_request}</p>
                                    <p><b>Fecha esperada: </b>${val.date_wait}</p>
                                    <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getRejectedDeliveriesFromDateDesign(){
        let data = await getRejectedDeliveriesFromDate()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Pedidos rechazados del 2009</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Estatus: </b>${val.status}</p>
                                    <p><b>Codigo del pedido: </b>${val.code_request}</p>
                                    <p><b>Fecha esperada: </b>${val.date_wait}</p>
                                    <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getJanuaryDeliveriesDesign(){
        let data = await getJanuaryDeliveries()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Pedidos de enero</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Estatus: </b>${val.status}</p>
                                    <p><b>Codigo del pedido: </b>${val.code_request}</p>
                                    <p><b>Fecha esperada: </b>${val.date_wait}</p>
                                    <p><b>Fecha de entrega: </b>${val.date_delivery}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }
    async getPaymentsPaypalByDateDesign(){
        let data = await getPaymentsPaypalByDate()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>Id de pagos por Paypal del 2008</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Pago: </b>${val.payment}</p>
                                    <p><b>Id de la transaccion: </b>${val.Id_transaction}</p>
                                    <p><b>Fecha del pago: </b>${val.date_payment}</p>
                                    <p><b>Total: </b>${val.total}</p>
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
            if (now === "client_4") await this.getEmployeeOfTheClientDesign();
            if (now === "employee_1") await this.getInfoEmployeesByBossDesign();
            if (now === "employee_2") await this.getBossDesign();
            if (now === "employee_3") await this.getNameByClientDesign();
            if (now === "employee_4") await this.getEmployeesWithoutClientsDesign();
            if (now === "employee_5") await this.getEmployeesDiff_from_SpecificPositionDesign();
            if (now === "offices_1") await this.getOfficesbyCityDesign();
            if (now === "offices_2") await this.getOfficesFromSpainDesign();
            if (now === "offices_3") await this.getOfficesByEmployeesDesign();
            if (now === "payments_1") await this.getClientsCodeFromSpecificDateDesign();
            if (now === "payments_2") await this.getPaymentsPaypalByDateDesign();
            if (now === "requests_1") await this.getRequestStatusDesign();
            if (now === "requests_2") await this.getRetardedDeliveriesDesign();
            if (now === "requests_3") await this.getRightDeliveriesDesign();
            if (now === "requests_4") await this.getRejectedDeliveriesFromDateDesign();
            if (now === "requests_5") await this.getJanuaryDeliveriesDesign();


        }
    }
}
