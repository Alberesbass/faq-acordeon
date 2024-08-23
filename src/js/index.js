const itensPerguntasERespostas = document.querySelectorAll(".duvida-frequente");
// console.log(itensPerguntasERespostas);

itensPerguntasERespostas.forEach(function (item) {
  // console.log(item);

  item.addEventListener("click", function () {
    const itemAtivoAtual = document.querySelector(".mostrar");
    // console.log(perguntaAtiva);

    if (itemAtivoAtual) {
        itemAtivoAtual.classList.remove("mostrar");
    }

    item.classList.add("mostrar");
  });
});
