const ratings = document.querySelectorAll('li');
const CardPrincipal = document.querySelector('.Principal-Cartao');
const CardSecundario = document.querySelector('.Secundario-Cartao');
const BotaoEnviar = document.querySelector('.Submit-btn');

let ratingSelecionado; 


//função que remove a estilização do clique anterior caso mude a opção//
function SelecionarBotao(e){
  if(ratingSelecionado !== undefined){
    ratings[ratingSelecionado-1].classList.remove('ativo');
  }

  //Define qual número foi selecionado e ativa estilização//
  e.target.classList.add('ativo');
  ratingSelecionado = Number(e.target.innerText);
  
}

//Comando do clique//
ratings.forEach(function(opt){
  opt.addEventListener('click',SelecionarBotao);
});






function Enviar(){
    if(ratingSelecionado !== undefined){
      CardSecundario.style.display = 'block';
      CardPrincipal.style.display = 'none';
         
    }
}



  BotaoEnviar.addEventListener('Click',function());
 


  



