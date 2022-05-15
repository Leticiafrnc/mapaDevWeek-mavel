const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) =>{ // seleciona os itens personagens
    personagem.addEventListener('mouseenter', () => { // espera passar o mouse em cima do personagem
        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado') // remove personagem selecionado
        
        personagem.classList.add ('selecionado') // adiciona o proximo personagem


        const idSelecionado = personagem.attributes.id.value;

        const imagemJogador1 =document.getElementById('personagem-jogador-1'); 
        imagemJogador1.src =`./src/imagens/${idSelecionado}.png`

        const nomeJogador1 = document.getElementById('nome-jogador-um'); //pega o nome do jogador
        const nomeSelecionado = personagem.getAttribute('data-name'); // atribui o nome do jogador

        nomeJogador1.innerHTML  = nomeSelecionado;// escreve o nome do personagem no html

        

        
    })
})

