export class Mydetails extends HTMLElement{
    myCard
    p
    details
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = /*html*/`
            <link rel="stylesheet" href="../css/myDetails.css">
            <details>
                <summary>
                    <div class="details__description">Campus: </div>
                    <div class="details__container">
                        <p></p>
                    </div>
                </summary>
                <div class="report__container">
                    <my-card></my-card> 
                </div>
            </details>
        `;
        this.myCard = this.shadowRoot.querySelector("my-card")
        this.p = this.shadowRoot.querySelector("p");
        this.details = this.shadowRoot.querySelector("details")
    }

    static get observedAttributes() {
        return ["logic", "text"];
    }
    attributeChangedCallback(name, old, now) {
        if(name == "logic") Mydetails.query = now
        if(name == "text") this.p.textContent = now
    }
}

