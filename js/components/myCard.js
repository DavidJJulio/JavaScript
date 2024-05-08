import {
    getSpainClients
} from "../module/clients"








export class myCard extends HTMLElement {
    constructor(){
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
        <link rel="stylesheet" href="../css/myCard.css">`
        super();
    }

    async getSpainClientsDesign(){
        let data = await getSpainClients();
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /*html*/`
            <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p>adadasdadadadsd</p>
                            <p>dadssadsadadsadsad</p>
                        </div>
                    </div>
                </div>
            `
        })
    }

    static get observedAttributes() {
        return ["logic"];
    }
    attributeChangedCallback(name, old, now) {
        if(name=="logic" && now=="client_6") this.getSpainClientsDesign()
    }

}