function prepararMensagem() {
    var tel = document.getElementById("telefone").value;
    var mensagem = document.getElementById("Mensagem").value;
    document.getElementById('zap').href = "https://api.whatsapp.com//send?phone=phone=+55"+ tel +"&text=" + mensagem;
    
}