document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-deposito');
    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.sucess-message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Esconde mensagens anteriores
        errorMessage.style.display = 'none';
        successMessage.style.display = 'none';

        // Validação dos campos
        if (!campoA.value || !campoB.value) {
            errorMessage.textContent = 'Ambos os campos devem ser preenchidos';
            errorMessage.style.display = 'block';
            return;
        }

        const valorA = parseFloat(campoA.value.replace(',', '.'));
        const valorB = parseFloat(campoB.value.replace(',', '.'));

        if (isNaN(valorA) || isNaN(valorB)) {
            errorMessage.textContent = 'Por favor, insira números válidos';
            errorMessage.style.display = 'block';
            return;
        }

        // Validação principal (B > A)
        if (valorB > valorA) {
            successMessage.innerHTML = `Depósito validado! <b>${valorB}</b> é maior que <b>${valorA}</b>`;
            successMessage.style.display = 'block';
            
            // Limpa os campos (opcional)
            campoA.value = '';
            campoB.value = '';
        } else {
            errorMessage.textContent = `O valor B (${valorB}) deve ser maior que o A (${valorA})`;
            errorMessage.style.display = 'block';
        }
    });
});