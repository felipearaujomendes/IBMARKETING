$( "#formcontato" ).submit(function( event ) {
    enviarEmail();
    event.preventDefault();
  });
function enviarEmail()
{
 
    var  remetente = document.getElementById("email").value;
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;
    var assunto = document.getElementById("assunto").value;
     
    var data = 
    {
        nome :nome,
        mensagem :mensagem,
        assunto:assunto,
        remetente :remetente,
        destinatario :"contato@socialmente.tec.br",
        id :"3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.socialmente.tec.br/api/email", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    xhr.onreadystatechange = () => {
    
        if (xhr.readyState == 4) {
    
            if (xhr.status == 200) 
            {
                document.getElementById("formcontato").reset();
                alert( "Contato realizado, logo retornaremos."); 
				
            }
            else {
                alert( "Ops... não conseguimos enviar, tente novamente mais tarde." ); 
            }
        }
    }

    return false;
}