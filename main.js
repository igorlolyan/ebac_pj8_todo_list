const nomeDaTarefa = $('#inputNomeDaTarefa');
const formulário = $('#formNomeDaTarefa');

const minhaLista = $('ul');

var arrayTarefas = [];
var linhas = '';

formulário.on('submit', function(e){
    e.preventDefault();

    addLinhas();
    atualizaLista();
})


function addLinhas() {
    if (arrayTarefas.includes(nomeDaTarefa.val())) {
        alert(`Essa tarefa já foi inserida meu querido.\nDigite outra tarefa!`);
        nomeDaTarefa.val('');
    } else {
        arrayTarefas.push(nomeDaTarefa.val());

        var linha = 
        `
            <label>
                <li>
                    <input type='checkbox'>
                    ${nomeDaTarefa.val()}
                </li>
            </label>
        `;

        linhas += linha;
        nomeDaTarefa.val('');
    }
}

function atualizaLista() {

    minhaLista.html(linhas);

}

minhaLista.on('click', 'li', function (e) {
    const target = $(e.target);

    if (target.is('input[type="checkbox"]')) {
        // Se o clique foi no checkbox
        target.closest('li').toggleClass('checked', target.prop('checked'));
    } else if (target.is('label')) {
        // Se o clique foi no texto da tarefa (dentro do label)
        const checkbox = target.find('input[type="checkbox"]');
        checkbox.prop('checked', !checkbox.prop('checked'));
        target.closest('li').toggleClass('checked', checkbox.prop('checked'));
    }
});