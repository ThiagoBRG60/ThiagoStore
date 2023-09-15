const catalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
  const produtosEscondidos = Array.from(
    catalogoProdutos.getElementsByClassName("hidden")
  );

  for (const produto of produtosEscondidos) {
    produto.classList.remove("hidden");
  }
}

function esconderPlaystation() {
  exibirTodos();
  const produtosPlaystation = Array.from(
    catalogoProdutos.getElementsByClassName("playstation")
  );

  for (const produto of produtosPlaystation) {
    produto.classList.add("hidden");
  }
}

function esconderXbox() {
  exibirTodos();
  const produtosXbox = Array.from(
    catalogoProdutos.getElementsByClassName("xbox")
  );

  for (const produto of produtosXbox) {
    produto.classList.add("hidden");
  }
}

export function inicializarFiltros() {
  document
    .getElementById("exibir-todos")
    .addEventListener("click", exibirTodos);
  document
    .getElementById("exibir-xbox")
    .addEventListener("click", esconderPlaystation);
  document
    .getElementById("exibir-playstation")
    .addEventListener("click", esconderXbox);
}
