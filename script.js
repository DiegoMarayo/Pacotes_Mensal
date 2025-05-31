const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const container = document.getElementById("meses-container");
const totalSpan = document.getElementById("total");

function criarCampos() {
  meses.forEach(mes => {
    const div = document.createElement("div");
    div.className = "mes";
    div.innerHTML = `
      <label for="${mes}">${mes}:</label>
      <input type="number" id="${mes}" step="0.01" />
    `;
    container.appendChild(div);
  });
}

function carregarValores() {
  meses.forEach(mes => {
    const input = document.getElementById(mes);
    const valorSalvo = localStorage.getItem(mes);
    if (valorSalvo !== null) {
      input.value = valorSalvo;
    }
    input.addEventListener("input", () => {
      localStorage.setItem(mes, input.value);
      calcularTotal();
    });
  });
}

function calcularTotal() {
  let total = 0;
  meses.forEach(mes => {
    const valor = parseInt(document.getElementById(mes).value) || 0;
    total += valor;
  });
  totalSpan.textContent = total.toFixed();
}

window.onload = function () {
  criarCampos();
  carregarValores();
  calcularTotal();
};