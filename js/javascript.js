const ratings = document.querySelectorAll('li');
const CardPrincipal = document.querySelector('.Principal-Cartao');
const CardSecundario = document.querySelector('.Secundario-Cartao');
const BotaoEnviar = document.querySelector('.Submit-btn');
const Alerta = document.querySelector('.alerta');


let ratingSelecionado; 


//função que remove a estilização do clique anterior caso mude a opção//
function SelecionarBotao(e){
  if(ratingSelecionado !== undefined){
    ratings[ratingSelecionado-1].classList.remove('ativo');
  }

  //Define qual número foi selecionado e ativa estilização//
  e.target.classList.add('ativo');
  ratingSelecionado = Number(e.target.innerText);
  document.getElementById('valor').innerHTML = ratingSelecionado;
}

//Comando do clique//
ratings.forEach(function(opt){
  opt.addEventListener('click',SelecionarBotao);
});




function Enviar(){
    if(ratingSelecionado !== undefined){
      CardPrincipal.style.display = 'none';
      CardSecundario.style.display = 'block';      
    }
      Alerta.style.display = 'block';
}




BotaoEnviar.addEventListener('click',Enviar);
 


  



