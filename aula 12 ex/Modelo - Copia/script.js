function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data =  new date ()
//var hora = data.getHours()
var hora = 22
msg.innerHTML = `agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'fotomanha.jpeg'
}else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'fototarde.jpeg'
}else {
    //boa noite!
    img.src = 'fotonoite.jpeg'
}

}