const ratings = document.querySelectorAll('li');
let ratingSelecionado; 
console.log(ratings);

function SelecionarBotao(e){
  if(ratingSelecionado !== undefined){
    ratings[ratingSelecionado-1].classList.remove('ativo');
  }


  e.target.classList.add('ativo');
  ratingSelecionado = Number(e.target.innerText);
  console.log(ratingSelecionado);
}

ratings.forEach(function(opt){
  opt.addEventListener('click',SelecionarBotao);
});