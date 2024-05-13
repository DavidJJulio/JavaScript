export class Mydetails extends HTMLElement{

    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = /*html*/`
        <details id="queryAboutTable7">
        <link rel="stylesheet" href="../css/myDetails.css">
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
    }
}

