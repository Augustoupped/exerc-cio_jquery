function adicionarTarefa() {
    const tarefaInput = $('#tarefa'); // Seleciona o input
    const tarefaTexto = tarefaInput.val().trim(); // Pega o texto do input

    if (tarefaTexto === '') {
        alert('Digite uma tarefa!');
        return;
    }

    // Cria o elemento <li>
    const tarefaItem = $('<li></li>');

    // Cria o span com o texto da tarefa
    const spanTexto = $('<span></span>')
        .text(tarefaTexto)
        .addClass('texto-tarefa')
        .on('click', function() {
            $(this).toggleClass('concluida'); // Alterna a classe 'concluida' ao clicar
        });

    // Cria o botão de remoção
    const botaoRemover = $('<button></button>')
        .html('🗑️')
        .attr('title', 'Remover tarefa')
        .on('click', function() {
            tarefaItem.remove(); // Remove o <li> correspondente
        });

    // Adiciona o span e o botão ao <li>
    tarefaItem.append(spanTexto).append(botaoRemover);

    // Adiciona o <li> à lista
    $('#lista-tarefas').append(tarefaItem);

    // Limpa o input
    tarefaInput.val('');
}

// Adiciona evento para tecla "Enter" no input
$('#tarefa').on('keypress', function(e) {
    if (e.which === 13) { // 13 é o código da tecla Enter
        adicionarTarefa();
    }
});
