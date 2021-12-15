function carregar(){
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora <12){
        //BOM DIA
        img.src = 'ftdia.png'
        document.body.style.background = '#ceecef'
    }else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'fttarde.png'
        document.body.style.background = '#eab05e'
    }else{
        //BOA NOITE
        img.src = 'ftnoite.png'
        document.body.style.background = '#2b364a'
    }
}
