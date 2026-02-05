const resumo = [];

const dadosSalvos = localStorage.getItem("resumo");
if (dadosSalvos) {
    resumo.push(...JSON.parse(dadosSalvos));
}

let total = 0;
let itensTotais = 0;
let somaValorUnitarios = 0;
let mediaValorUnitario = 0;

const form = document.getElementById("form-item");
const tabela = document.getElementById("lista-itens");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  pegarValores();
});

function pegarValores(){
    const descricao = document.getElementById("descricao").value;
    const categoria = document.getElementById("categoria").value;
    const quantidade = Number(document.getElementById("quantidade").value);
    const valorUnitario = Number(document.getElementById("valorUnitario").value);

    const orcamentoUnitario = {
    descricao,
    categoria,
    quantidade,
    valorUnitario,
    subTotal: quantidade * valorUnitario
    }
    
    resumo.push(orcamentoUnitario)
    localStorage.setItem("resumo", JSON.stringify(resumo));
    
    const index = resumo.length - 1;
    adicionarLinha(orcamentoUnitario, index);
    atualizarCalculos();
};

function atualizarCalculos(){
        let i = 0;
        total = 0;
        somaValorUnitarios = 0

        while (i < resumo.length) {
            total += resumo[i].subTotal
            somaValorUnitarios += resumo[i]. valorUnitario
            i++
        }
        
        itensTotais = resumo.length
        mediaValorUnitario = (somaValorUnitarios / itensTotais);

        document.getElementById("total-geral").innerText =
        `R$ ${total.toFixed(2)}`;

        document.getElementById("quantidade-itens").innerText =
        itensTotais;

        document.getElementById("metrica-extra").innerText =
        `R$ ${mediaValorUnitario.toFixed(2)}`;
    }

function adicionarLinha(orcamentoUnitario, index) {
        const tr = document.createElement("tr");

        tr.innerHTML = `
        <td>${orcamentoUnitario.descricao}</td>
        <td>${orcamentoUnitario.categoria}</td>
        <td>${orcamentoUnitario.quantidade}</td>
        <td>R$ ${orcamentoUnitario.valorUnitario.toFixed(2)}</td>
        <td>R$ ${orcamentoUnitario.subTotal.toFixed(2)}</td>
        <td><button class="btn-apagar" >Excluir</button></td>
        `;
        tabela.appendChild(tr);

        tr.querySelector(".btn-apagar").addEventListener("click", function() {
        apagarItem(index);
        });

        }

function apagarItem(index) {
    resumo.splice(index, 1);
    localStorage.setItem("resumo", JSON.stringify(resumo));
    atualizarTabela(); 
    atualizarCalculos();
}

function atualizarTabela() {
    tabela.innerHTML = ""; // limpa a tabela
    resumo.forEach((item, index) => adicionarLinha(item, index));
}

tabela.innerHTML = "";
atualizarTabela()