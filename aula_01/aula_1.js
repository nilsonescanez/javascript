// console.log("Ola mundo!");

// const nome = prompt("Digite seu nome");
// alert("Bem vindo " + nome);

function somar() {
  const n1 = Number(prompt("Digite o 1° numero"));
  const n2 = Number(prompt("Digite o 2° numero"));
  const resultado = n1 + n2;
  alert(`O resultado da soma é ${resultado}`);
}


function multiplicar() {
    const n1 = Number(prompt("Digite o 1° numero"));
    const n2 = Number(prompt("Digite o 2° numero"));
    const resultado = n1 * n2;
    alert(`O resultado da multiplicação é ${resultado}`);

} // somar();

function somarInputs() {
    const n1 = Number(document.querySelector("#n1_soma").value);
    const n2 = Number(document.querySelector("#n2_soma").value);
    const resultado = n1 + n2;
    document.querySelector("#resultado_soma").textContent = `O resultado da soma é ${resultado}`;
}


function multiplicarInputs() {
    const nm1 = Number(document.querySelector("#nm1_multiplicar").value);
    const nm2 = Number(document.querySelector("#nm2_multiplicar").value);
    const resultado = nm1 + nm2;
    document.querySelector("#resultado_multiplicacao").textContent = `O resultado da multiplicação é ${resultado}`;
}