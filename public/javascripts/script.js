function mostrar(){
    var nome = window.document.getElementById('txtNome')
    var res = window.document.querySelector('div#resultado')
    var personagem = window.document.querySelector('div#nomePerso')
    var imagens_steven = ['/images/StevenUniverse/perola.jpeg','/images/StevenUniverse/garnet.jpeg','/images/StevenUniverse/steven.jpeg','/images/StevenUniverse/amentista.jpeg']
    var imagens_turmaMonica = ['/images/TurmadaMonica/magali.png','/images/TurmadaMonica/Cascao.png','/images/TurmadaMonica/Cebolinha.png','/images/TurmadaMonica/monica.png']
    var imagens_adventure = ['/images/AdventureTime/Fiinnn.png','/images/AdventureTime/Jaakk.png','/images/AdventureTime/beemo.png','/images/AdventureTime/Rei_Gelado.png']
    var imagens_pokemon = ['/images/Pokemon/snorlax.gif']
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
    
    }else if(nome.value && tipo_perso.value == 2){
        res.innerHTML = `<strong>${nome.value}</strong> você é...`
        // var mudar = Math.floor(Math.random() * imagens_pokemon.length)
        var mudar = 0
        if(mudar == 0){
            res.innerHTML += ' Snorlax, só faz dormir hein!? haha'
            img.innerHTML = "<img src='" + imagens_pokemon[mudar] + "'>"
        }
    
    }else if(nome.value && tipo_perso.value == 4){
        var mudar = Math.floor(Math.random() * imagens_turmaMonica.length)
        console.log(mudar)
        if(nome.value == 'Bruna'){
            res.innerHTML = `<strong>${nome.value}</strong> você é a Magali... come que só a peste tu menina!!`
            img.innerHTML = "<img src='"+imagens_turmaMonica[0]+"'>"
        }else{
            switch (mudar) {
                case 0:
                    res.innerHTML = `<strong>${nome.value}</strong> você é a Magali!`
                    img.innerHTML = "<img src='"+imagens_turmaMonica[mudar]+"'>"
                    break;
                case 1:
                    res.innerHTML = `<strong>${nome.value}</strong> você é o Cascão, gosta demais de tomar banho né!?!?`
                    img.innerHTML = "<img src='"+imagens_turmaMonica[mudar]+"'>"
                    break;
                case 2:
                    res.innerHTML = `<strong>${nome.value}</strong> você é o Cebolinha`
                    img.innerHTML = "<img src='"+imagens_turmaMonica[mudar]+"'>"
                    break;
                case 3:
                    res.innerHTML = `<strong>${nome.value}</strong> você é a Mônica, não tolera desaforo!!`
                    img.innerHTML = "<img src='"+imagens_turmaMonica[mudar]+"'>"
                    break;
                default:
                    break;
            }
        }
        
    }else if(nome.value && tipo_perso.value == 5){
        var mudar = Math.floor(Math.random() * imagens_adventure.length)
        console.log(mudar)
        switch (mudar) {
            case 0:
                res.innerHTML = `<strong>${nome.value}</strong> você é o Finn corajoso(a) e justo(a)!`
                img.innerHTML = "<img src='"+imagens_adventure[mudar]+"'>"
                break;
            case 1:
                res.innerHTML = `<strong>${nome.value}</strong> você é o Jake`
                img.innerHTML = "<img src='"+imagens_adventure[mudar]+"'>"
                break;
            case 2:
                res.innerHTML = `<strong>${nome.value}</strong> você é o Beemo ou BMO`
                img.innerHTML = "<img src='"+imagens_adventure[mudar]+"'>"
                break;
            case 3:
                res.innerHTML = `<strong>${nome.value}</strong> você é o Rei Gelado, sempre atrás da sua Jujuba`
                img.innerHTML = "<img src='"+imagens_adventure[mudar]+"'>"
                break;    
            default:
                break;
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