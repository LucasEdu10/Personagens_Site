function mostrar(){
    var perso = window.document.getElementsByTagName('input')[0]
    var img = document.createElement('img')
    var res = window.document.querySelector('div#resultado')
    img.setAttribute('id', 'imagem')

    if(perso.value == 'Wilder'){
        img.setAttribute('src','/images/perola.jpeg')
        res.innerHTML = '<p><strong>Você é a Perola, pois é delicada e astuta como ela!!</strong></p>'
    }else if(perso.value == 'George'){
        img.setAttribute('src','/images/garnet.jpeg')
        res.innerHTML = '<p><strong>Você é a Garnet, pois você é calmo e estóico!!</strong></p>'
    }else if(perso.value == 'Luan'){
        res.innerHTML = '<p><strong>Desculpe não foi possivel encontrar um personagem para você</strong></p>'
    }else if(perso.value == 'Lucas'){
        img.setAttribute('src','/images/steven.jpeg')
        res.innerHTML = '<p><strong>Você é o Steven, pois você é otimista, amigável e extrovertido!!</strong></p>'
    }else if(perso.value == 'Tayná'){
        img.setAttribute('src', '/images/magali.png')
        res.innerHTML = '<p><strong>Você é a magali, pois não para de comer!!</strong></p>'
    }else if(perso.value == 'Leonardo'){
        img.setAttribute('src', '/images/jimmy-neutron.png')
        res.innerHTML = '<p><strong>Você é a Jimmy Neutron, pois você é desenrolado dms mano!!</strong></p>'
    }else{
        res.innerHTML = '<p><strong>Digite o seu nome com a primeira letra Maiúscula!!</strong></p>'
    }
    perso.value = ''
    res.appendChild(img)
}///home/lucas/Projetos/Estudos/Personagens_Site/public/images/amentista.jpeg