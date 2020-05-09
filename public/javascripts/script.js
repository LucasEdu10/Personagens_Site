function mostrar(){
    var nome = window.document.getElementById('txtNome')
    var res = window.document.querySelector('div#resultado')
    var personagem = window.document.querySelector('div#nomePerso')
    var imagens_steven = ['/images/StevenUniverse/perola.jpeg', '/images/StevenUniverse/garnet.jpeg','/images/StevenUniverse/steven.jpeg','/images/StevenUniverse/amentista.jpeg']
    var img = window.document.getElementById('img')
    var tipo_perso = window.document.getElementById('desenho')

    if(nome.value && tipo_perso.value == 1){
        res.innerHTML = `<strong>${nome.value}</strong> você é...`
        var mudar = Math.floor(Math.random() * imagens_steven.length)
        console.log(mudar)
        if(mudar == 0){
            res.innerHTML += ' a Perola!!'
            img.innerHTML = "<img src='" + imagens_steven[mudar] + "'>"
        }else if(mudar == 1){
            res.innerHTML += ' a Garnet!!'
            img.innerHTML = "<img src='" + imagens_steven[mudar] + "'>"
        }else if(mudar == 2){
            res.innerHTML += ' o Steven!!'
            img.innerHTML = "<img src='" + imagens_steven[mudar] + "'>"
        }else if(mudar == 3){
            res.innerHTML += ' a Ametista!!'
            img.innerHTML = "<img src='" + imagens_steven[mudar] + "'>"
        }
    }else if(nome.value && tipo_perso.value == 3){
        personagem.innerHTML = ''
        res.innerHTML = '<p><strong>Paz entre os mundos Wubba Lubba Dub Dub</strong></p>'
        img.innerHTML = "<p><img src='/images/RickandMorty/paz_Rick_and_Morty.gif'></p>"
    
    }else if(nome.value === ""){
        img.innerHTML = ''
        personagem.innerHTML = ''
        res.innerHTML = '<p><strong>Digite o seu nome!!</strong></p>'
    }else{
        personagem.innerHTML = ''
        res.innerHTML = '<p><strong>Desculpe mas não foi possivel encontrar seu personagem ;-(</strong></p>'
        img.innerHTML = "<img src='/images/Tristeza.gif'>"
    }
    nome.value = ''
}