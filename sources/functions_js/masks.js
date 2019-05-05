$(function(){
    // 1. FUNÇÃO QUE CRIA MÁSCARAS PARA OS INPUTS
    // 2. NECESSITA DO PLUGIN "jQuery"
    // 2.1. ARQUIVO "jquery-1.12.2.min.js"
    // 3. FUNCIONA JUNTO AO SCRIPT "jQuery Mask Plugin v1.14.0"
    // 3.1. ARQUIVO "jquery.mask.min.js"

    // PADRÃO CRIADO PARA AS MÁSCARAS
    $('.date').mask('00/00/0000');
    $('.cep').mask('00000-000');
    $('.telFixo').mask('(00) 0000-0000');
    $('.telCel').mask('(00) 00000-0000');
    $('.rg').mask('00.000.000-X', {'translation': { X: { pattern: /[0-9X-x]/}}});
    $('.cpf').mask('000.000.000-00');
    $('.id11').mask('00000000000');

    // 1. FUNÇÃO QUE CRIA MÁSCARAS PARA OS INPUTS ESPECIFICAMENTE PARA NÚMEROS
    // 2. NECESSITA DO PLUGIN "jQuery"
    // 2.1. ARQUIVO "jquery-1.12.2.min.js"
    // 3. FUNCIONA JUNTO AO SCRIPT "* MaskAsNumber Jquery Plugin v1.0"
    // 3.1. ARQUIVO "jquery.maskasnumber.js"

    // MÁSCARAS PARA NÚMEROS
    $('.numberM10M100').maskAsNumber({min: 10, max: 100});
});
