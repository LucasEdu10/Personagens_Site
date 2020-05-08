function mostrar(){
    var nomesLista = ["Lucas","Wilder","Leonardo","Luan", "George", "Ismael", "Junior", "Tayná", "Victor", "Eduardo", "Maria", "Eduarda", "Duda"]
    var nome = window.document.getElementById('txtNome')
    var res = window.document.querySelector('div#resultado')
    var personagem = window.document.querySelector('div#nomePerso')
    var imagens_steven = ['/images/perola.jpeg', '/images/garnet.jpeg','/images/steven.jpeg','/images/amentista.jpeg']
    var img = window.document.getElementById('img')
    var tipo_perso = window.document.getElementById('desenho')

    for(var i = 0; i < nomesLista.length; i++){
        if(nome.value === nomesLista[i] && tipo_perso.value == 1){
            res.innerHTML = `${nome.value} você é...`
            var mudar = Math.floor(Math.random() * imagens_steven.length)
            console.log(mudar)
            if(mudar == 0){
                personagem.innerHTML = 'Perola!!'
                img.innerHTML = "<img src='" + imagens_steven[mudar] + "'>"
            }else if(mudar == 1){
                personagem.innerHTML = 'Garnet!!'
                img.innerHTML = "<img src='" + imagens_steven[mudar] + "'>"
            }else if(mudar == 2){
                personagem.innerHTML = 'Steven!!'
                img.innerHTML = "<img src='" + imagens_steven[mudar] + "'>"
            }else if(mudar == 3){
                personagem.innerHTML = 'Ametista!!'
                img.innerHTML = "<img src='" + imagens_steven[mudar] + "'>"
            }
            break
        }else if(nome.value === nomesLista[i] && tipo_perso.value == 3){
            res.innerHTML = '<p><strong>Paz entre os mundos Wubba Lubba Dub Dub</strong></p>'
            img.innerHTML = "<p><img src='/images/paz_Rick_and_Morty.gif'></p>"
            break
        
        }else if(nome.value === ""){
            img.innerHTML = ''
            personagem.innerHTML = ''
            res.innerHTML = '<p><strong>Digite o seu nome!!</strong></p>'
        }else{
            personagem.innerHTML = ''
            res.innerHTML = '<p><strong>Desculpe mas não foi possivel encontrar seu personagem ;-(</strong></p>'
            img.innerHTML = "<img src='/images/Tristeza.gif'>"
        }
    }
    nome.value = ''
}