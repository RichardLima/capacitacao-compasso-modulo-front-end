$(function () {
    if (false) {
        window.console = {};
        console.log = function () { return false; };
    };
    console.log('teste');

    //var txt = document.getElementById('txt_nome');
    // var txt = $('#txt_nome');

    //setInterval(function () {
    //     if (txt.is(":visible")){
    //          txt.hide('slow');
    //     }else{
    //          txt.show('slow');
    //     }

    //txt.toggle();                

    //}, 2000);

    //  txt.val('Novo valor do campo');

    var $div_produtos = $('#produtos');
    var $div_frm_cadastro = $('#div_frm_cadastro');

    var $txt_nome_produto = $div_frm_cadastro.find('#txt_nome');
    var $txt_preco_produto = $div_frm_cadastro.find('#txt_preco');

    var $ar_produtos = [
        { "nome": "Produto 1", "valor": 10.5 },
        { "nome": "Produto 2", "valor": 19.5 },
        { "nome": "Produto 3", "valor": 21.5 }
    ];

    function renderizaProdutos() {
        //limpo os objetos dentro da div
        $div_produtos.empty();

        $.each($ar_produtos, function (key, obj) {
            console.log(obj.nome);
            //crio uma nova div
            var $div = $('<div class="content-produto">');
            var $h1 = $("<h1>");
            var $p = $("<p>");
            //adiciono o nome no h1
            $h1.html(obj.nome);
            $p.html(obj.preco);
            //adiciono o h1 dentro da div
            $div.append($h1);
            $div.append($p);
            //adiciona o objeto div no container #produtos
            $div_produtos.append($div);
        });
    }

    $div_frm_cadastro.find(".js-frm-cadastro").submit(function (e) {
        e.preventDefault();

        console.log($txt_nome_produto.val());
        console.log($txt_preco_produto.val());

        $ar_produtos.push(
            {
                "nome": $txt_nome_produto.val(),
                "preco": $txt_preco_produto.val()
            }
        );
        renderizaProdutos();
        $(this)[0].reset();

       
            $('.msg-sucesso').removeClass("hide");
            setTimeout(function (){
                $('.msg-sucesso').addClass("hide");
            }, 5000);

        $('html, body').animate({
            scrollTop:$(document).height()
        }, 'slow');
        
    });

 
    renderizaProdutos();
});


