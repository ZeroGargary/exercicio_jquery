$(document).ready(function() {
    // Evento de submissão do formulário
    $('#itemForm').on('submit', function(event) {
        event.preventDefault(); // Previne o comportamento padrão de recarregar a página

        // Pega o valor do input
        const newItem = $('#itemInput').val();

        // Verifica se o input não está vazio
        if (newItem.trim() !== '') {
            // Cria um novo item <li> e adiciona à <ul>
            const li = $(`<li>${newItem}</li>`);
            
            // Adiciona o evento de clique para riscar o item
            li.on('click', function() {
                // Alterna a classe 'strike-through' ao clicar
                $(this).toggleClass('strike-through');
            });
            
            // Adiciona o novo <li> à lista
            $('#itemList').append(li);

            // Limpa o campo de input após a submissão
            $('#itemInput').val('');
        }
    });
});
