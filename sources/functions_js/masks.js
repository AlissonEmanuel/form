$(function(){
    // 1. FUNÇÃO QUE CRIA MÁSCARAS PARA OS INPUTS
    // 2. NECESSITA DO PLUGIN "jQuery"
    // 2.1. ARQUIVO "jquery-1.12.2.min.js"
    // 3. FUNCIONA JUNTO AO SCRIPT "jQuery Mask Plugin v1.14.0"
    // 3.1. ARQUIVO "jquery.mask.min.js"

    // PADRÃO CRIADO PARA AS MÁSCARAS
    $('.date').mask('00/00/0000');
    $('.cep').mask('00000-000');
    $('.tel-fixo').mask('(00) 0000-0000');
    $('.tel-cel').mask('(00) 00000-0000');
    $('.tel').mask('(00) 0000-00000');
    $('.rg').mask('00.000.000-X', {'translation': { X: { pattern: /[0-9X-x]/}}});
    $('.cpf').mask('000.000.000-00');
});
