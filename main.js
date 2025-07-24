function adicionarTarefa() {
    const input = document.getElementById('tarefa');
    const textoTarefa = input.value.trim();
  
    if (textoTarefa === '') {
      alert('Digite uma tarefa!');
      return;
    }
  
    const lista = document.getElementById('lista-tarefas');
    const li = document.createElement('li');
  
    // Cria um span com o texto da tarefa
    const spanTexto = document.createElement('span');
    spanTexto.textContent = textoTarefa;
    spanTexto.classList.add('texto-tarefa');
  
    // Adiciona funcionalidade de riscar tarefa ao clicar no texto
    spanTexto.addEventListener('click', function () {
      spanTexto.classList.toggle('concluida');
    });
  
    // Cria o botão de lixeira
    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = '🗑️';
    botaoRemover.classList.add('remover');
    botaoRemover.addEventListener('click', function () {
      li.remove();
    });
  
    // Adiciona o texto e o botão no <li>
    li.appendChild(spanTexto);
    li.appendChild(botaoRemover);
  
    // Adiciona o <li> na lista
    lista.appendChild(li);
    input.value = '';
  }
