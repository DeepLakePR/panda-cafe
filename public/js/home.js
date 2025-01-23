$(document).ready(function () {

    $('#create-coffee').click(function () {

        var bean = $('#bean option:selected').text();
        var method = $('#method option:selected').text();
        var milk = $('#milk option:selected').text();
        var flavor = $('#flavor option:selected').text();

        var result = 'Você escolheu um café ' + bean + ', preparado com o método ' + method + ', com leite ' + milk;
        if (flavor !== 'Nenhum') {
            result += ' e sabor de ' + flavor;
        }
        result += '.';

        $('#coffee-result a').attr('href', `
            https://api.whatsapp.com/send?phone=5541995513398&text=
            Olá, gostaria de um café ${bean}, 
            preparado com o método ${method}, 
            com leite ${milk} 
            ${flavor !== 'Nenhum' ? `e sabor de ${flavor}` : ""}`
        );
        $('#result-text').text(result);
        $('#coffee-result').fadeIn();

    });

    $('.card').hover(
        function () {
            $(this).css('transform', 'scale(1.05)').css('transition', 'transform 0.3s');
        },
        function () {
            $(this).css('transform', 'scale(1)');
        }
    );
    
});
