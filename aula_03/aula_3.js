const alunos = [
    "Gustavo",
    "Nilson",
    "Ezequiel",
    "Brunna"
];

// alert(alunos[2]);

 //for (const aluno of alunos) {
 //   console.log(aluno);
 //}


const carros = [

    {
        placa: "ISE1D70",
        cor: "Branca",
        marca: "VW",
        modelo: "Fusca",
        tetoSolar: false,
        chassi: "12345678"
    },
    {
        placa: "EJF1234",
        cor: "Azul",
        marca: "GM",
        modelo: "Chevete",
        tetoSolar: "tru",
        chassi: "98765432"
    },
 {
        placa: "MMU5678",
        cor: "Preto",
        marca: "Ford",
        modelo: "Escorte",
        tetoSolar: false,
        chassi: "234565432"
    },
];    
// alert(`O carro é: ${carro.marca} ${carro.modelo} - ${carro.placa}`);

// console.log(carros[0].placa);
// console.log(carros[1].placa);

// for (const carro of carros) {
//   console.log(carro.modelo);
//}

function popularTabela() {
    const tbody = document.querySelector("#tabela_carros tbody");

    let html = "";
    for(const carro of carros) {
        html += `
            <tr>
                <td>${carro.placa}</td>
                <td>${carro.cor}</td>
                <td>${carro.marca}</td>
                <td>${carro.modelo}</td>
                <td>${carro.tetoSolar ?"Sim" : "Não"}</td>
                <td>${carro.chassi}</td>
            </tr>
        `;
    }

    tbody.innerHTML = html;

}

popularTabela();
