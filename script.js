document.getElementById("calcular").addEventListener("click", () => {
  calcular();
});

function calcular() {
  let html = "";
  let numero = parseInt(document.getElementById("numero").value);

  if (isNaN(numero)) {
    alert("Solo debe ingresar números");
    return;
  }

  if (numero < 1 || numero > 20) {
    alert("Debe estar entre 1 a 20");
    return;
  }

  for (let i = 1; i <= numero; i++) {
    html += `<li class="list-group-item">${i} x ${numero} = ${i * numero}</li>`;
    console.log(`${i} x ${numero} = ${i * numero}`);
  }

  html += `<li class="list-group-item mt-3"></li>`;

  for (let i = 1; i <= numero; i++) {
    html += `<li class="list-group-item">El Factorial de ${i} es ${calcularFactorial(
      i
    )}</li>`;

    console.log(`El Factorial de ${i} es ${calcularFactorial(i)}`);
  }

  document.getElementById("list").innerHTML = html;
}

const calcularFactorial = (num) => {
  let resultado = 1;

  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
};
