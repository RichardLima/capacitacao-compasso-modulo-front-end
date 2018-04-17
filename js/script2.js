$(function () {

    $('#txt_cep').mask('00000-000');

    var $txt_cep = $('#txt_cep');


    $('#txt_cep').on('keypress', function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();

            $txt_cep.next('span').removeClass('hide');

            if (($txt_cep.val().length != 9)) {
                alert("Digite um CEP de 9 caracteres");
                 $txt_cep.next('span').addClass('hide');
                $txt_cep.val("");
                return false;
            };

            var $option = {
                "url": `https://viacep.com.br/ws/${$txt_cep.val().replace("-","")}/json/`
            };

            $.ajax($option).done(function ($data) {
                console.log($data);
                if($data.erro){
                    $("#aviso").html("CEP inválido");
                    setTimeout(function(){
                        $("#aviso").html("");
                    }, 3000);
                }
                $("#txt_logradouro").val($data.logradouro);
                $("#txt_bairro").val($data.bairro);
                $("#txt_localidade").val($data.localidade);
                $("#txt_uf").val($data.uf);

            }).always(function () {
                $txt_cep.next('span').addClass('hide');
            });
        };

    });

});