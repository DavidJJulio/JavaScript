export class Mycard extends HTMLElement {
constructor(){
    super();
    this.attachShadow({mode: "open"})
    this.shadowRoot.innerHTML += /*html*/`
                <link rel="stylesheet" href="../css/myCard.css">
                <div class="report__card">
                    <div class="card__title">
                        <div>prueba</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Nombre del empleado: </b>prueba</p>
                            <p><b>Ciudad: </b>prueba</p>
                        </div>
                    </div>
                </div>
    `
}

}