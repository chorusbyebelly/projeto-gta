/*

Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma
    Passo 1 - Pegar o botão de seleção de plataformas no JS pra poder verificar quando o usuário clicar em cima dele 
    
    Passo 2 - Pegar o elemento do conteúdo que precisa ser mostrado
    
    Passo 3 - Pegar o clique do usuário no JS 
    
    Passo 4 - Quando o usuário clicar, adicionar a classe ativo na listagem de plataformas dentro do botão pra que o conteúdo dele apareça 
    
    
Objetivo 2 - Caso a lista de botões de plataforma já esteja aparecendo e o usuário clicar em cima, o conteúdo deve ser escondido
    
    Passo 1 - Verificar se o botão já está aberto, se sim, devemos remover a classe ativo pra que ele esconda o conteúdo novamente 
    
*/

  const botao = document.querySelector(".btn-plataforma");
  const elementoPlataformas = document.querySelector("btn-plataforma.plataformas")

  botao.addEventListener("click", () => {
      elementoPlataformas.classList.add("ativo");
  });