class Controller {
    constructor() {
    }

    adicionarFaleConosco(event) {
        event.preventDefault();
        let $ = document.querySelector.bind(document);//utilizar $ para simplicar document.querySelector
        let faleconosco = new FaleConosco($('#faleName').value, $('#faleEmail').value, $('#faleAssunto').value, $('#faleMensagem').value);
        this.enviar(faleconosco);
        this._limpaFaleconosco();        
    }


    _limpaFaleconosco(){
        let $ = document.querySelector.bind(document);//utilizar $ para simplicar document.querySelector        
        $('#faleName').value = "";
        $('#faleEmail').value = ""; 
        $('#faleAssunto').value = ""; 
        $('#faleMensagem').value = ""; 
    }

    enviar(object){
        $.ajax({
        url: 'http://codeondemand.com.br/api/faleconosco.php',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        dataType: 'json',
        data: JSON.stringify(object),
        success: function(data){
            //função
        }
    });
    
    }
}

