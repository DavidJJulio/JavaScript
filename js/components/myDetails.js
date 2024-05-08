export class myDetails extends HTMLElement {
        p
        myCard
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = /*html*/ `
                <link rel="stylesheet" href="../css/myDetails.css">
                <details id="queryAboutTable7">
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
            this.p = this.shadowRoot.querySelector("p");
            this.myCard = this.shadowRoot.querySelector("my_card")
    }
    
    static get observedAttributes(){
        return ["logic", "query"]
    }
    attributeChangedCallback(name, old, now){
        if(name == "query") this.p.innerHTML = now
    }
}