class Controller {
    constructor() {
    }

    adicionarFaleConosco(event) {
        event.preventDefault();
        let $ = document.querySelector.bind(document);//utilizar $ para simplicar document.querySelector
        let faleconosco = new FaleConosco($('#faleName').value, $('#faleEmail').value, $('#faleAssunto').value, $('#faleMensagem').value);
        this._limpaFaleconosco();
    }


    _limpaFaleconosco(){
        let $ = document.querySelector.bind(document);//utilizar $ para simplicar document.querySelector        
        $('#faleName').value = "";
        $('#faleEmail').value = ""; 
        $('#faleAssunto').value = ""; 
        $('#faleMensagem').value = ""; 
    }


    

}