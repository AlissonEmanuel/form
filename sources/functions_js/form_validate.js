$(function(){
    // Ao carregar, todos os valores serão zerados
    //$('.formItem').val('');

    // Quando o input estiver ativo (Focus)
    $('.form-item').on("focus", function(){
        var formItem = $(this);
        var label = $(this).parent().children('label');
        var spanErrorDescription = $(this).parent().children('.error-description');
        
        formItem.removeClass('validate-error');
        formItem.removeClass('validate-ok');
        label.removeClass('validate-error');
        label.removeClass('validate-ok');

        formItem.addClass('focus');
        label.addClass('focus');
        spanErrorDescription.hide();
    });

    // Quando o input perder o (Focus)
    $('.form-item').on("blur", function(){
        var formItem = $(this);
        var label = $(this).parent().children('label');
        var spanErrorDescription = $(this).parent().children('.error-description');

        if (formItem.val() != '') {
            formItem.removeClass('focus');
            
            formItem.addClass('validate-ok');
            label.addClass('validate-ok');
            spanErrorDescription.hide();
        } else {
            formItem.removeClass('focus');
            formItem.removeClass('validate-error');
            formItem.removeClass('validate-ok');
            label.removeClass('focus');
            label.removeClass('validate-error');
            label.removeClass('validate-ok');
            spanErrorDescription.hide();
        }

        if (formItem.hasClass('email')) {
            if($(this).val() != '') {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test(formItem.val())){
                    formItem.removeClass('focus');
                    formItem.removeClass('validate-ok');
                    label.removeClass('validate-ok');

                    formItem.addClass('validate-error');
                    label.addClass('validate-error');
                    spanErrorDescription.show().html("Formato de e-mail incorreto!");
                } else {
                    formItem.removeClass('focus');
                    label.removeClass('validate-error');

                    formItem.addClass('validate-ok');
                    label.addClass('validate-ok');
                    spanErrorDescription.hide();
                }
            } else {
                formItem.removeClass('validate-error');
                label.removeClass('validate-error');
                spanErrorDescription.hide();
            }
        }

        if (formItem.hasClass('cep')) {
            if($(this).val() != '') {
                if($(this).val().length < 9) {
                    formItem.removeClass('focus');
                    formItem.removeClass('validate-ok');
                    label.removeClass('validate-ok');

                    formItem.addClass('validate-error');
                    label.addClass('validate-error');
                    spanErrorDescription.show().html("Formato de CEP incorreto!");
                } else {
                    formItem.removeClass('focus');
                    label.removeClass('validate-error');

                    formItem.addClass('validate-ok');
                    label.addClass('validate-ok');
                    spanErrorDescription.hide();
                }
            } else {
                formItem.removeClass('validate-error');
                label.removeClass('validate-error');
                spanErrorDescription.hide();
            }
        }

        if (formItem.hasClass('date')) {
            if($(this).val() != '') {
                if($(this).val().length < 10) {
                    formItem.removeClass('focus');
                    formItem.removeClass('validate-ok');
                    label.removeClass('validate-ok');

                    formItem.addClass('validate-error');
                    label.addClass('validate-error');
                    spanErrorDescription.show().html("Formato de data incorreto!");
                } else {
                    formItem.removeClass('focus');
                    label.removeClass('validate-error');

                    formItem.addClass('validate-ok');
                    label.addClass('validate-ok');
                    spanErrorDescription.hide();
                }
            } else {
                formItem.removeClass('validate-error');
                label.removeClass('validate-error');
                spanErrorDescription.hide();
            }
        }

        if (formItem.hasClass('password')) {
            if($(this).val() != '') {
                if($(this).val().length < 6) {
                    formItem.removeClass('focus');
                    formItem.removeClass('validate-ok');
                    label.removeClass('validate-ok');

                    formItem.addClass('validate-error');
                    label.addClass('validate-error');
                    spanErrorDescription.show().html("Mínimo de 6 dígitos!");
                } else {
                    formItem.removeClass('focus');
                    label.removeClass('validate-error');

                    formItem.addClass('validate-ok');
                    label.addClass('validate-ok');
                    spanErrorDescription.hide();
                }
            } else {
                formItem.removeClass('validate-error');
                label.removeClass('validate-error');
                spanErrorDescription.hide();
            }
        }
        
        if (formItem.hasClass('cpf')) {
            if($(this).val() != '') {
                if($(this).val().length < 14) {
                    formItem.removeClass('focus');
                    formItem.removeClass('validate-ok');
                    label.removeClass('validate-ok');

                    formItem.addClass('validate-error');
                    label.addClass('validate-error');
                    spanErrorDescription.show().html("Formato de CPF incorreto!");
                } else {
                    formItem.removeClass('focus');
                    label.removeClass('validate-error');

                    formItem.addClass('validate-ok');
                    label.addClass('validate-ok');
                    spanErrorDescription.hide();
                }
            } else {
                formItem.removeClass('validate-error');
                label.removeClass('validate-error');
                spanErrorDescription.hide();
            }
        }

        if (formItem.hasClass('tel')) {
            if (formItem.hasClass('tel-cel')) {
                if($(this).val() != '') {
                    if($(this).val().length < 15) {
                        formItem.removeClass('focus');
                        formItem.removeClass('validate-ok');
                        label.removeClass('validate-ok');

                        formItem.addClass('validate-error');
                        label.addClass('validate-error');
                        spanErrorDescription.show().html("Formato de telefone incorreto!");
                    } else {
                        formItem.removeClass('focus');
                        label.removeClass('validate-error');

                        formItem.addClass('validate-ok');
                        label.addClass('validate-ok');
                        spanErrorDescription.hide();
                    }
                } else {
                    formItem.removeClass('validate-error');
                    label.removeClass('validate-error');
                    spanErrorDescription.hide();
                }
            }

            if (formItem.hasClass('tel-fixo')) {
                if($(this).val() != '') {
                    if($(this).val().length < 14) {
                        formItem.removeClass('focus');
                        formItem.removeClass('validate-ok');
                        label.removeClass('validate-ok');

                        formItem.addClass('validate-error');
                        label.addClass('validate-error');
                        spanErrorDescription.show().html("Formato de telefone incorreto!");
                    } else {
                        formItem.removeClass('focus');
                        label.removeClass('validate-error');

                        formItem.addClass('validate-ok');
                        label.addClass('validate-ok');
                        spanErrorDescription.hide();
                    }
                } else {
                    formItem.removeClass('validate-error');
                    label.removeClass('validate-error');
                    spanErrorDescription.hide();
                }
            }
        }
    });

    $('.label-file').on("click", function(){
        var formItem = $(this).parent().children('.formItem');
        var labelFile = $(this);
        var label = $(this).parent().children('.labelFile');
        var labelValidateOk = $(this).parent().children('.labelValidateJsOk');
        var labelValidateError = $(this).parent().children('.labelValidateJsError');

        labelFile.html("");
        label.show();
        labelValidateOk.hide();
        labelValidateError.hide();
        formItem.val("");
    });

    $('.form-file').on("change", function(){
        var formItem = $(this);
        var label = $(this).parent().children('.labelFileNameFile');
        var nameFile = formItem.val().split('\\').pop();
        if (nameFile.length > 20) {
            nameFile = nameFile.substr(0,20)+'...';
        } else {
            nameFile = nameFile;
        }

        if(formItem.val() != '') {
            label.html(nameFile);
        }
    });

    // Efeito para exibição da senha
    $('.show-password').on("click", function(){
        var formItem = $(this).parent().children('.form-item');
        var icon = $(this);

        if (formItem.prop("type") == "password") {
            formItem.prop("type", "text");
            icon.addClass('show');
        } else {
            formItem.prop("type", "password");
            icon.removeClass('show');
        }
    });

    // Verificação feita quando a página é carregada e os inputs já tenham valores carregados(Útil quando o navegador utiliza autocomplete. Para os efeitos acontecerem)
    $(".form-item").each(function() {
        if ($(this).val() != "") {
            var formItem = $(this);
            var label = $(this).parent().children('label');
            
            formItem.addClass('validate-ok');
            label.addClass('focus');
            label.addClass('validate-ok');
        }
    });

    // Verificação feita quando o valor de algum "input" é alterado (Útil quando o navegador utiliza autocomplete. Para os efeitos acontecerem)
    $('.form-item').on("change", function(){
        var formItem = $(this);
        var label = $(this).parent().children('label');
            
        formItem.addClass('validate-ok');
        label.addClass('focus');
        label.addClass('validate-ok');
    });

    // Eventos que ocorrerão após o clique no botão de submit.
    $(".input-submit").click(function(e) {
        e.preventDefault();
        var form = $(this).parent().parent("form");
        var formItem = $(this).parent().parent().children().children(".form-item");

        formItem.each(function() {
            var formItem = $(this);
            var label = $(this).parent().children('label');
            var spanErrorDescription = $(this).parent().children('.error-description');

            if ($(this).hasClass("no-validate")) {
                if ($(this).val() == "") {
                    if ($(this).hasClass("required")) {
                        if ($(this).hasClass("form-file")) {
                            var label = $(this).parent().children('.label-file');

                            $(this).focus(); // Importante ser primeiro

                            formItem.removeClass('focus');
                            formItem.removeClass('validate-ok');
                            label.removeClass('validate-ok');

                            formItem.addClass('validate-error');
                            label.addClass('validate-error');
                            spanErrorDescription.show().html("Selecione um arquivo!");

                            return false;
                        } else {
                            $(this).focus(); // Importante ser primeiro

                            formItem.removeClass('focus');
                            formItem.removeClass('validate-ok');
                            label.removeClass('validate-ok');

                            formItem.addClass('validate-error');
                            label.addClass('validate-error');
                            spanErrorDescription.show().html("Informação obrigatória!");
                            
                            return false;
                        }
                    } else {
                        $(this).removeClass("no-validate");
                        $(this).addClass("yes-validate");
                    }
                } else {
                    if ($(this).hasClass('email')) {
                        if($(this).val() != '') {
                            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                            
                            if(!emailReg.test($(this).val())){
                                $(this).focus(); // Importante ser primeiro

                                formItem.removeClass('focus');
                                formItem.removeClass('validate-ok');
                                label.removeClass('validate-ok');

                                formItem.addClass('validate-error');
                                label.addClass('validate-error');
                                spanErrorDescription.show().html("Formato de e-mail incorreto!");
                                
                                return false;
                            } else {
                                $(this).removeClass("no-validate");
                                $(this).addClass("yes-validate");
                            }
                        }
                    }

                    if ($(this).hasClass('cep')) {
                        if($(this).val() != '') {
                            if($(this).val().length < 9) {
                                $(this).focus(); // Importante ser primeiro

                                formItem.removeClass('focus');
                                formItem.removeClass('validate-ok');
                                label.removeClass('validate-ok');

                                formItem.addClass('validate-error');
                                label.addClass('validate-error');
                                spanErrorDescription.show().html("Formato de CEP incorreto!");

                                return false;
                            } else {
                                $(this).removeClass("no-validate");
                                $(this).addClass("yes-validate");
                            }
                        }
                    }

                    if ($(this).hasClass('date')) {
                        if($(this).val() != '') {
                            if($(this).val().length < 10) {
                                $(this).focus(); // Importante ser primeiro

                                formItem.removeClass('focus');
                                formItem.removeClass('validate-ok');
                                label.removeClass('validate-ok');

                                formItem.addClass('validate-error');
                                label.addClass('validate-error');
                                spanErrorDescription.show().html("Formato de data incorreto!");
                                
                                return false;
                            } else {
                                $(this).removeClass("no-validate");
                                $(this).addClass("yes-validate");
                            }
                        }
                    }

                    if ($(this).hasClass('password')) {
                        if($(this).val() != '') {
                            if($(this).val().length < 6) {
                                $(this).focus(); // Importante ser primeiro

                                formItem.removeClass('focus');
                                formItem.removeClass('validate-ok');
                                label.removeClass('validate-ok');

                                formItem.addClass('validate-error');
                                label.addClass('validate-error');
                                spanErrorDescription.show().html("Mínimo de 6 dígitos");
                                
                                return false;
                            } else {
                                $(this).removeClass("no-validate");
                                $(this).addClass("yes-validate");
                            }
                        }
                    }
                    
                    if ($(this).hasClass('cpf')) {
                        if($(this).val() != '') {
                            if($(this).val().length < 14) {
                                $(this).focus(); // Importante ser primeiro

                                formItem.removeClass('focus');
                                formItem.removeClass('validate-ok');
                                label.removeClass('validate-ok');

                                formItem.addClass('validate-error');
                                label.addClass('validate-error');
                                spanErrorDescription.show().html("Formato de CPF incorreto!");
                                
                                return false;
                            } else {
                                $(this).removeClass("no-validate");
                                $(this).addClass("yes-validate");
                            }
                        }
                    }

                    else if ($(this).hasClass('tel')) {
                        if ($(this).hasClass('tel-cel')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 15) {
                                    $(this).focus(); // Importante ser primeiro

                                    formItem.removeClass('focus');
                                    formItem.removeClass('validate-ok');
                                    label.removeClass('validate-ok');

                                    formItem.addClass('validate-error');
                                    label.addClass('validate-error');
                                    spanErrorDescription.show().html("Formato de telefone incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("no-validate");
                                    $(this).addClass("yes-validate");
                                }
                            }
                        }

                    else if ($(this).hasClass('tel-fixo')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 14) {
                                    $(this).focus(); // Importante ser primeiro

                                    formItem.removeClass('focus');
                                    formItem.removeClass('validate-ok');
                                    label.removeClass('validate-ok');

                                    formItem.addClass('validate-error');
                                    label.addClass('validate-error');
                                    spanErrorDescription.show().html("Formato de telefone incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("no-validate");
                                    $(this).addClass("yes-validate");
                                }
                            }
                        }
                    } else {
                        $(this).removeClass("no-validate");
                        $(this).addClass("yes-validate");
                    }
                }
            } else {
                // Se possuir a classe yes-validate
                if ($(this).hasClass("yes-validate")) {
                    if ($(this).val() == "") {
                        if ($(this).hasClass("required")) {
                            if ($(this).hasClass("form-file")) {
                                var label = $(this).parent().children('.label-file');

                                $(this).removeClass("yes-validate");
                                $(this).addClass("no-validate");
                                $(this).focus(); // Importante ser primeiro

                                formItem.removeClass('focus');
                                formItem.removeClass('validate-ok');
                                label.removeClass('validate-ok');

                                formItem.addClass('validate-error');
                                label.addClass('validate-error');
                                spanErrorDescription.show().html("Selecione um arquivo!");
                                
                                return false;
                            } else {
                                $(this).removeClass("yes-validate");
                                $(this).addClass("no-validate");
                                $(this).focus(); // Importante ser primeiro

                                formItem.removeClass('focus');
                                formItem.removeClass('validate-ok');
                                label.removeClass('validate-ok');

                                formItem.addClass('validate-error');
                                label.addClass('validate-error');
                                spanErrorDescription.show().html("Informação obrigatória!");
                                
                                return false;
                            }
                        }
                    } else {
                        if ($(this).hasClass('email')) {
                            if($(this).val() != '') {
                                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                                if(!emailReg.test($(this).val())){
                                    $(this).removeClass("yes-validate");
                                    $(this).addClass("no-validate");
                                    $(this).focus(); // Importante ser primeiro
                                    
                                    formItem.removeClass('focus');
                                    formItem.removeClass('validate-ok');
                                    label.removeClass('validate-ok');

                                    formItem.addClass('validate-error');
                                    label.addClass('validate-error');
                                    spanErrorDescription.show().html("Formato de e-mail incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("no-validate");
                                    $(this).addClass("yes-validate");
                                }
                            }
                        }

                        if ($(this).hasClass('cep')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 9) {
                                    $(this).removeClass("yes-validate");
                                    $(this).addClass("no-validate");
                                    $(this).focus(); // Importante ser primeiro

                                    formItem.removeClass('focus');
                                    formItem.removeClass('validate-ok');
                                    label.removeClass('validate-ok');

                                    formItem.addClass('validate-error');
                                    label.addClass('validate-error');
                                    spanErrorDescription.show().html("Formato de CEP incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("no-validate");
                                    $(this).addClass("yes-validate");
                                }
                            }
                        }

                        if ($(this).hasClass('date')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 10) {
                                    $(this).removeClass("yes-validate");
                                    $(this).addClass("no-validate");
                                    $(this).focus(); // Importante ser primeiro

                                    formItem.removeClass('focus');
                                    formItem.removeClass('validate-ok');
                                    label.removeClass('validate-ok');

                                    formItem.addClass('validate-error');
                                    label.addClass('validate-error');
                                    spanErrorDescription.show().html("Formato de data incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("no-validate");
                                    $(this).addClass("yes-validate");
                                }
                            }
                        }

                        if ($(this).hasClass('password')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 6) {
                                    $(this).removeClass("yes-validate");
                                    $(this).addClass("no-validate");
                                    $(this).focus(); // Importante ser primeiro

                                    formItem.removeClass('focus');
                                    formItem.removeClass('validate-ok');
                                    label.removeClass('validate-ok');

                                    formItem.addClass('validate-error');
                                    label.addClass('validate-error');
                                    spanErrorDescription.show().html("Mínimo de 6 dígitos!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("no-validate");
                                    $(this).addClass("yes-validate");
                                }
                            }
                        }
                        
                        if ($(this).hasClass('cpf')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 14) {
                                    $(this).removeClass("yes-validate");
                                    $(this).addClass("no-validate");
                                    $(this).focus(); // Importante ser primeiro

                                    formItem.removeClass('focus');
                                    formItem.removeClass('validate-ok');
                                    label.removeClass('validate-ok');

                                    formItem.addClass('validate-error');
                                    label.addClass('validate-error');
                                    spanErrorDescription.show().html("Formato de CPF incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("no-validate");
                                    $(this).addClass("yes-validate");
                                }
                            }
                        }

                        else if ($(this).hasClass('tel')) {
                            if ($(this).hasClass('tel-cel')) {
                                if($(this).val() != '') {
                                    if($(this).val().length < 15) {
                                        $(this).removeClass("yes-validate");
                                        $(this).addClass("no-validate");
                                        $(this).focus(); // Importante ser primeiro

                                        formItem.removeClass('focus');
                                        formItem.removeClass('validate-ok');
                                        label.removeClass('validate-ok');

                                        formItem.addClass('validate-error');
                                        label.addClass('validate-error');
                                        spanErrorDescription.show().html("Formato de telefone incorreto!");
                                        
                                        return false;
                                    } else {
                                        $(this).removeClass("no-validate");
                                        $(this).addClass("yes-validate");
                                    }
                                }
                            }

                        else if ($(this).hasClass('tel-fixo')) {
                                if($(this).val() != '') {
                                    if($(this).val().length < 14) {
                                        $(this).removeClass("yes-validate");
                                        $(this).addClass("no-validate");
                                        $(this).focus(); // Importante ser primeiro

                                        formItem.removeClass('focus');
                                        formItem.removeClass('validate-ok');
                                        label.removeClass('validate-ok');

                                        formItem.addClass('validate-error');
                                        label.addClass('validate-error');
                                        spanErrorDescription.show().html("Formato de telefone incorreto!");
                                        
                                        return false;
                                    } else {
                                        $(this).removeClass("no-validate");
                                        $(this).addClass("yes-validate");
                                    }
                                }
                            }
                        } else {
                            $(this).removeClass("no-validate");
                            $(this).addClass("yes-validate");
                        }
                    }
                }
            }
        });

        if(form.find(".no-validate").length) {
            return false;
        } else {
            // Submit Form
            form.submit();
        }
    });
});