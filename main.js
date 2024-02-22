const form = document.getElementById("contato");
const contato = [];

let linhas = '';

form.addEventListener("submit", function(e){
    e.preventDefault();

    adicionarlinha();
    atulizarTabela();

})

function adicionarlinha(){

    const inputNomeContato    = document.getElementById("nome-contato");
    const inputNumeroTelefone = document.getElementById("numero-telefone");
;
    if(contato.includes(inputNumeroTelefone)){

        alert('Numero existe');

    }else{
        

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atulizarTabela(){

    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;

}