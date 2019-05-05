$(function(){
    // Ao carregar, todos os valores serão zerados
    //$('.formItem').val('');

    // Quando o input estiver ativo (Focus)
    $('.formItem').on("focus", function(){
        var divItem = $(this).parent();
        var inputIcon = $(this).parent().children('.spanInputIcon');
        var formItem = $(this);
        var label = $(this).parent().children('label:not(.labelFileNameFile)');
        var labelText = $(this).parent().children('.labelText');
        var labelValidateOk = $(this).parent().children('.labelValidateJsOk');
        var labelValidateError = $(this).parent().children('.labelValidateJsError');
        var spanErrorDescription = $(this).parent().children('.spanErrorDescription');
        var id = this.id; // Como se pega o id
        
        divItem.css({'border':'0.050em solid #AED6F1'}); // Azul
        inputIcon.css({'background-position':'0 -1.2em'});
        label.hide();
        labelText.show();
        label.css({'color':'#AED6F1'});
        if($(this).val() == '') {
            label.stop().animate({
                'height':'1.7em',
                'line-height':'1.7em',
                'font-size':'0.6em'
            });
        } else {
            label.css({
                'height':'1.7em',
                'line-height':'1.7em',
                'font-size':'0.6em'
            });
        }
        spanErrorDescription.hide();
    });

    // Quando o input perder o (Focus)
    $('.formItem').on("blur", function(){
        var divItem = $(this).parent();
        var inputIcon = $(this).parent().children('.spanInputIcon');
        var formItem = $(this);
        var label = $(this).parent().children('.labelText:not(.labelFileNameFile)');
        var labelValidateOk = $(this).parent().children('.labelValidateJsOk');
        var labelValidateError = $(this).parent().children('.labelValidateJsError');
        var spanErrorDescription = $(this).parent().children('.spanErrorDescription');
        var id = this.id; // Como se pega o id

        if (formItem.val() != '') {
            divItem.css({'border':'0.050em solid #009c41'}); // Verde
            inputIcon.css({'background-position':'0 -2.4em'});
            label.hide();
            labelValidateError.hide();
            spanErrorDescription.hide();
            labelValidateOk.css({'color':'#009c41'});
            labelValidateOk.show();
        } else {
            divItem.css({'border':'0.050em solid #cccccc'}); // Cinza
            inputIcon.css({'background-position':'0 0'});
            labelValidateOk.hide();
            labelValidateError.hide();
            
            label.css({'color':'#cccccc'});
            label.show();
            label.stop().animate({
                'height':'2.8em',
                'line-height':'2.8em',
                'font-size':'1em'
            });
            spanErrorDescription.hide();
        }

        if (formItem.hasClass('formEmail')) {
            if($(this).val() != '') {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                if(!emailReg.test(formItem.val())){
                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                    inputIcon.css({'background-position':'0 -3.6em'});
                    label.hide();
                    labelValidateOk.hide();
                    labelValidateError.css({'color':'#E74C3C'});
                    labelValidateError.show();
                    spanErrorDescription.show().html("Formato de e-mail incorreto!");
                } else {
                    divItem.css({'border':'0.050em solid #009c41'}); // Verde
                    inputIcon.css({'background-position':'0 -2.4em'});
                    label.hide();
                    labelValidateError.hide();
                    spanErrorDescription.hide();
                    labelValidateOk.css({'color':'#009c41'});
                    labelValidateOk.show();
                }
            } else {
                divItem.css({'border':'0.050em solid #cccccc'}); // Cinza
                inputIcon.css({'background-position':'0 0'});
                labelValidateOk.hide();
                labelValidateError.hide();
                spanErrorDescription.hide();
                label.css({'color':'#cccccc'});
                label.show();
            }
        }

        if (formItem.hasClass('cep')) {
            if($(this).val() != '') {
                if($(this).val().length < 9) {
                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                    inputIcon.css({'background-position':'0 -3.6em'});
                    label.hide();
                    labelValidateOk.hide();
                    labelValidateError.css({'color':'#E74C3C'});
                    labelValidateError.show();
                    spanErrorDescription.show().html("Formato de CEP incorreto!");
                } else {
                    divItem.css({'border':'0.050em solid #009c41'}); // Verde
                    inputIcon.css({'background-position':'0 -2.4em'});
                    label.hide();
                    labelValidateError.hide();
                    spanErrorDescription.hide();
                    labelValidateOk.css({'color':'#009c41'});
                    labelValidateOk.show();
                }
            } else {
                divItem.css({'border':'0.050em solid #cccccc'}); // Cinza
                inputIcon.css({'background-position':'0 0'});
                labelValidateOk.hide();
                labelValidateError.hide();
                spanErrorDescription.hide();
                label.css({'color':'#cccccc'});
                label.show();
            }
        }

        if (formItem.hasClass('date')) {
            if($(this).val() != '') {
                if($(this).val().length < 10) {
                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                    inputIcon.css({'background-position':'0 -3.6em'});
                    label.hide();
                    labelValidateOk.hide();
                    labelValidateError.css({'color':'#E74C3C'});
                    labelValidateError.show();
                    spanErrorDescription.show().html("Formato de data incorreto!");
                } else {
                    divItem.css({'border':'0.050em solid #009c41'}); // Verde
                    inputIcon.css({'background-position':'0 -2.4em'});
                    label.hide();
                    labelValidateError.hide();
                    spanErrorDescription.hide();
                    labelValidateOk.css({'color':'#009c41'});
                    labelValidateOk.show();
                }
            } else {
                divItem.css({'border':'0.050em solid #cccccc'}); // Cinza
                inputIcon.css({'background-position':'0 0'});
                labelValidateOk.hide();
                labelValidateError.hide();
                spanErrorDescription.hide();
                label.css({'color':'#cccccc'});
                label.show();
            }
        }

        if (formItem.hasClass('password')) {
            if($(this).val() != '') {
                if($(this).val().length < 6) {
                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                    inputIcon.css({'background-position':'0 -3.6em'});
                    label.hide();
                    labelValidateOk.hide();
                    labelValidateError.css({'color':'#E74C3C'});
                    labelValidateError.show();
                    spanErrorDescription.show().html("Mínimo de 6 dígitos!");
                } else {
                    divItem.css({'border':'0.050em solid #009c41'}); // Verde
                    inputIcon.css({'background-position':'0 -2.4em'});
                    label.hide();
                    labelValidateError.hide();
                    spanErrorDescription.hide();
                    labelValidateOk.css({'color':'#009c41'});
                    labelValidateOk.show();
                }
            } else {
                divItem.css({'border':'0.050em solid #cccccc'}); // Cinza
                inputIcon.css({'background-position':'0 0'});
                labelValidateOk.hide();
                labelValidateError.hide();
                spanErrorDescription.hide();
                label.css({'color':'#cccccc'});
                label.show();
            }
        }
        
        if (formItem.hasClass('cpf')) {
            if($(this).val() != '') {
                if($(this).val().length < 14) {
                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                    inputIcon.css({'background-position':'0 -3.6em'});
                    label.hide();
                    labelValidateOk.hide();
                    labelValidateError.css({'color':'#E74C3C'});
                    labelValidateError.show();
                    spanErrorDescription.show().html("Formato de CPF incorreto!");
                } else {
                    divItem.css({'border':'0.050em solid #009c41'}); // Verde
                    inputIcon.css({'background-position':'0 -2.4em'});
                    label.hide();
                    labelValidateError.hide();
                    spanErrorDescription.hide();
                    labelValidateOk.css({'color':'#009c41'});
                    labelValidateOk.show();
                }
            } else {
                divItem.css({'border':'0.050em solid #cccccc'}); // Cinza
                inputIcon.css({'background-position':'0 0'});
                labelValidateOk.hide();
                labelValidateError.hide();
                spanErrorDescription.hide();
                label.css({'color':'#cccccc'});
                label.show();
            }
        }

        if (formItem.hasClass('tel')) {
            if (formItem.hasClass('telCel')) {
                if($(this).val() != '') {
                    if($(this).val().length < 15) {
                        divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                        inputIcon.css({'background-position':'0 -3.6em'});
                        label.hide();
                        labelValidateOk.hide();
                        labelValidateError.css({'color':'#E74C3C'});
                        labelValidateError.show();
                        spanErrorDescription.show().html("Formato de telefone incorreto!");
                    } else {
                        divItem.css({'border':'0.050em solid #009c41'}); // Verde
                        inputIcon.css({'background-position':'0 -2.4em'});
                        label.hide();
                        labelValidateError.hide();
                        spanErrorDescription.hide();
                        labelValidateOk.css({'color':'#009c41'});
                        labelValidateOk.show();
                    }
                } else {
                    divItem.css({'border':'0.050em solid #cccccc'}); // Cinza
                    inputIcon.css({'background-position':'0 0'});
                    labelValidateOk.hide();
                    labelValidateError.hide();
                    spanErrorDescription.hide();
                    label.css({'color':'#cccccc'});
                    label.show();
                }
            }

            if (formItem.hasClass('telFixo')) {
                if($(this).val() != '') {
                    if($(this).val().length < 14) {
                        divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                        inputIcon.css({'background-position':'0 -3.6em'});
                        label.hide();
                        labelValidateOk.hide();
                        labelValidateError.css({'color':'#E74C3C'});
                        labelValidateError.show();
                        spanErrorDescription.show().html("Formato de telefone incorreto!");
                    } else {
                        divItem.css({'border':'0.050em solid #009c41'}); // Verde
                        inputIcon.css({'background-position':'0 -2.4em'});
                        label.hide();
                        labelValidateError.hide();
                        spanErrorDescription.hide();
                        labelValidateOk.css({'color':'#009c41'});
                        labelValidateOk.show();
                    }
                } else {
                    divItem.css({'border':'0.050em solid #cccccc'}); // Cinza
                    inputIcon.css({'background-position':'0 0'});
                    labelValidateOk.hide();
                    labelValidateError.hide();
                    spanErrorDescription.hide();
                    label.css({'color':'#cccccc'});
                    label.show();
                }
            }
        }
    });

    $('.labelFileNameFile').on("click", function(){
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

    $('.formFile').on("change", function(){
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
    $('.spanShowPassword').on("click", function(){
        var formItem = $(this).parent().children('.formItem');
        var iconShow = $(this);

        if (formItem.prop("type") == "password") {
            formItem.prop("type", "text");
            iconShow.css({
                'background-position' : '0 1.2em'
            });
        } else {
            formItem.prop("type", "password");
            iconShow.css({
                'background-position' : '0 0'
            });
        }
    });

    // Verificação feita quando a página é carregada e os inputs já tenham valores carregados(Útil quando o navegador utiliza autocomplete. Para os efeitos acontecerem)
    $(".formItem").each(function() {
        if ($(this).val() != "") {
            var divItem = $(this).parent();
            var inputIcon = $(this).parent().children('.spanInputIcon');
            var formItem = $(this);
            var label = $(this).parent().children(".labelText");
            var labelValidateOk = $(this).parent().children('.labelValidateJsOk');
                
            divItem.css({'border':'0.050em solid #009c41'}); // Verde
            inputIcon.css({'background-position':'0 -2.4em'});
            label.hide();
            labelValidateOk.css({
                'height':'1.7em',
                'line-height':'1.7em',
                'font-size':'0.6em',
                'color':'#009c41'
            });
            labelValidateOk.show();
        }
    });

    // Verificação feita quando o valor de algum "input" é alterado (Útil quando o navegador utiliza autocomplete. Para os efeitos acontecerem)
    $('.formItem').on("change", function(){
        var divItem = $(this).parent();
        var inputIcon = $(this).parent().children('.spanInputIcon');
        var formItem = $(this);
        var label = $(this).parent().children('.labelText');
                
        divItem.css({'border':'0.050em solid #009c41'}); // Verde
        inputIcon.css({'background-position':'0 -2.4em'});
        label.hide();
        labelValidateOk.css({
            'height':'1.7em',
            'line-height':'1.7em',
            'font-size':'0.6em',
            'color':'#009c41'
        });
        labelValidateOk.show();
    });

    // Eventos que ocorrerão após o clique no botão de submit.
    $(".inputSubmit").click(function() {
        var form = $(this).parent().parent("form");
        var formItem = $(this).parent().parent().children().children(".formItem");

        formItem.each(function() {
            var divItem = $(this).parent();
            var inputIcon = $(this).parent().children('.spanInputIcon');
            var label = $(this).parent().children('.labelText:not(.labelFileNameFile)');
            var labelValidateOk = $(this).parent().children('.labelValidateJsOk');
            var labelValidateError = $(this).parent().children('.labelValidateJsError');
            var spanErrorDescription = $(this).parent().children('.spanErrorDescription');

            if ($(this).hasClass("noValidate")) {
                if ($(this).val() == "") {
                    if ($(this).hasClass("required")) {
                        if ($(this).hasClass("formFile")) {
                            var label = $(this).parent().children('.labelFile');

                            $(this).focus(); // Importante ser primeiro

                            divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                            inputIcon.css({'background-position':'0 -3.6em'});
                            label.hide();
                            labelValidateError.css({'color':'#E74C3C'});
                            labelValidateError.show();
                            spanErrorDescription.show().html("Selecione um arquivo!");
                            
                            return false;
                        } else {
                            $(this).focus(); // Importante ser primeiro

                            divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                            inputIcon.css({'background-position':'0 -3.6em'});
                            label.hide();
                            labelValidateError.css({'color':'#E74C3C'});
                            labelValidateError.show();
                            spanErrorDescription.show().html("Informação obrigatória!");
                            
                            return false;
                        }
                    } else {
                        $(this).removeClass("noValidate");
                        $(this).addClass("yesValidate");
                    }
                } else {
                    if ($(this).hasClass('formEmail')) {
                        if($(this).val() != '') {
                            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                            
                            if(!emailReg.test($(this).val())){
                                $(this).focus(); // Importante ser primeiro

                                divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                inputIcon.css({'background-position':'0 -3.6em'});
                                labelValidateError.css({'color':'#E74C3C'});
                                labelValidateError.show();
                                spanErrorDescription.show().html("Formato de e-mail incorreto!");
                                
                                return false;
                            } else {
                                $(this).removeClass("noValidate");
                                $(this).addClass("yesValidate");
                            }
                        }
                    }

                    if ($(this).hasClass('cep')) {
                        if($(this).val() != '') {
                            if($(this).val().length < 9) {
                                $(this).focus(); // Importante ser primeiro

                                divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                inputIcon.css({'background-position':'0 -3.6em'});
                                labelValidateError.css({'color':'#E74C3C'});
                                labelValidateError.show();
                                spanErrorDescription.show().html("Formato de CEP incorreto!");

                                return false;
                            } else {
                                $(this).removeClass("noValidate");
                                $(this).addClass("yesValidate");
                            }
                        }
                    }

                    if ($(this).hasClass('date')) {
                        if($(this).val() != '') {
                            if($(this).val().length < 10) {
                                $(this).focus(); // Importante ser primeiro

                                divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                inputIcon.css({'background-position':'0 -3.6em'});
                                labelValidateError.css({'color':'#E74C3C'});
                                labelValidateError.show();
                                spanErrorDescription.show().html("Formato de data incorreto!");
                                
                                return false;
                            } else {
                                $(this).removeClass("noValidate");
                                $(this).addClass("yesValidate");
                            }
                        }
                    }

                    if ($(this).hasClass('password')) {
                        if($(this).val() != '') {
                            if($(this).val().length < 6) {
                                $(this).focus(); // Importante ser primeiro

                                divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                inputIcon.css({'background-position':'0 -3.6em'});
                                labelValidateError.css({'color':'#E74C3C'});
                                labelValidateError.show();
                                spanErrorDescription.show().html("Mínimo de 6 dígitos");
                                
                                return false;
                            } else {
                                $(this).removeClass("noValidate");
                                $(this).addClass("yesValidate");
                            }
                        }
                    }
                    
                    if ($(this).hasClass('cpf')) {
                        if($(this).val() != '') {
                            if($(this).val().length < 14) {
                                $(this).focus(); // Importante ser primeiro

                                divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                inputIcon.css({'background-position':'0 -3.6em'});
                                labelValidateError.css({'color':'#E74C3C'});
                                labelValidateError.show();
                                spanErrorDescription.show().html("Formato de CPF incorreto!");
                                
                                return false;
                            } else {
                                $(this).removeClass("noValidate");
                                $(this).addClass("yesValidate");
                            }
                        }
                    }

                    else if ($(this).hasClass('tel')) {
                        if ($(this).hasClass('telCel')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 15) {
                                    $(this).focus(); // Importante ser primeiro

                                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                    inputIcon.css({'background-position':'0 -3.6em'});
                                    labelValidateError.css({'color':'#E74C3C'});
                                    labelValidateError.show();
                                    spanErrorDescription.show().html("Formato de telefone incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("noValidate");
                                    $(this).addClass("yesValidate");
                                }
                            }
                        }

                    else if ($(this).hasClass('telFixo')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 14) {
                                    $(this).focus(); // Importante ser primeiro

                                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                    inputIcon.css({'background-position':'0 -3.6em'});
                                    labelValidateError.css({'color':'#E74C3C'});
                                    labelValidateError.show();
                                    spanErrorDescription.show().html("Formato de telefone incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("noValidate");
                                    $(this).addClass("yesValidate");
                                }
                            }
                        }
                    } else {
                        $(this).removeClass("noValidate");
                        $(this).addClass("yesValidate");
                    }
                }
            } else {
                // Se possuir a classe yesValidate
                if ($(this).hasClass("yesValidate")) {
                    if ($(this).val() == "") {
                        if ($(this).hasClass("required")) {
                            if ($(this).hasClass("formFile")) {
                                var label = $(this).parent().children('.labelFile');

                                $(this).removeClass("yesValidate");
                                $(this).addClass("noValidate");
                                $(this).focus(); // Importante ser primeiro

                                divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                inputIcon.css({'background-position':'0 -3.6em'});
                                label.hide();
                                labelValidateOk.hide();
                                labelValidateError.css({'color':'#E74C3C'});
                                labelValidateError.show();
                                spanErrorDescription.show().html("Selecione um arquivo!");
                                
                                return false;
                            } else {
                                $(this).removeClass("yesValidate");
                                $(this).addClass("noValidate");
                                $(this).focus(); // Importante ser primeiro

                                divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                inputIcon.css({'background-position':'0 -3.6em'});
                                label.hide();
                                labelValidateOk.hide();
                                labelValidateError.css({'color':'#E74C3C'});
                                labelValidateError.show();
                                spanErrorDescription.show().html("Informação obrigatória!");
                                
                                return false;
                            }
                        }
                    } else {
                        if ($(this).hasClass('formEmail')) {
                            if($(this).val() != '') {
                                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                                if(!emailReg.test($(this).val())){
                                    $(this).removeClass("yesValidate");
                                    $(this).addClass("noValidate");
                                    $(this).focus(); // Importante ser primeiro
                                    
                                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                    inputIcon.css({'background-position':'0 -3.6em'});
                                    label.hide();
                                    labelValidateOk.hide();
                                    labelValidateError.css({'color':'#E74C3C'});
                                    labelValidateError.show();
                                    spanErrorDescription.show().html("Formato de e-mail incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("noValidate");
                                    $(this).addClass("yesValidate");
                                }
                            }
                        }

                        if ($(this).hasClass('cep')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 9) {
                                    $(this).removeClass("yesValidate");
                                    $(this).addClass("noValidate");
                                    $(this).focus(); // Importante ser primeiro

                                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                    inputIcon.css({'background-position':'0 -3.6em'});
                                    label.hide();
                                    labelValidateOk.hide();
                                    labelValidateError.css({'color':'#E74C3C'});
                                    labelValidateError.show();
                                    spanErrorDescription.show().html("Formato de CEP incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("noValidate");
                                    $(this).addClass("yesValidate");
                                }
                            }
                        }

                        if ($(this).hasClass('date')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 10) {
                                    $(this).removeClass("yesValidate");
                                    $(this).addClass("noValidate");
                                    $(this).focus(); // Importante ser primeiro

                                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                    inputIcon.css({'background-position':'0 -3.6em'});
                                    label.hide();
                                    labelValidateOk.hide();
                                    labelValidateError.css({'color':'#E74C3C'});
                                    labelValidateError.show();
                                    spanErrorDescription.show().html("Formato de data incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("noValidate");
                                    $(this).addClass("yesValidate");
                                }
                            }
                        }

                        if ($(this).hasClass('password')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 6) {
                                    $(this).removeClass("yesValidate");
                                    $(this).addClass("noValidate");
                                    $(this).focus(); // Importante ser primeiro

                                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                    inputIcon.css({'background-position':'0 -3.6em'});
                                    label.hide();
                                    labelValidateOk.hide();
                                    labelValidateError.css({'color':'#E74C3C'});
                                    labelValidateError.show();
                                    spanErrorDescription.show().html("Mínimo de 6 dígitos!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("noValidate");
                                    $(this).addClass("yesValidate");
                                }
                            }
                        }
                        
                        if ($(this).hasClass('cpf')) {
                            if($(this).val() != '') {
                                if($(this).val().length < 14) {
                                    $(this).removeClass("yesValidate");
                                    $(this).addClass("noValidate");
                                    $(this).focus(); // Importante ser primeiro

                                    divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                    inputIcon.css({'background-position':'0 -3.6em'});
                                    label.hide();
                                    labelValidateOk.hide();
                                    labelValidateError.css({'color':'#E74C3C'});
                                    labelValidateError.show();
                                    spanErrorDescription.show().html("Formato de CPF incorreto!");
                                    
                                    return false;
                                } else {
                                    $(this).removeClass("noValidate");
                                    $(this).addClass("yesValidate");
                                }
                            }
                        }

                        else if ($(this).hasClass('tel')) {
                            if ($(this).hasClass('telCel')) {
                                if($(this).val() != '') {
                                    if($(this).val().length < 15) {
                                        $(this).removeClass("yesValidate");
                                        $(this).addClass("noValidate");
                                        $(this).focus(); // Importante ser primeiro

                                        divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                        inputIcon.css({'background-position':'0 -3.6em'});
                                        label.hide();
                                        labelValidateOk.hide();
                                        labelValidateError.css({'color':'#E74C3C'});
                                        labelValidateError.show();
                                        spanErrorDescription.show().html("Formato de telefone incorreto!");
                                        
                                        return false;
                                    } else {
                                        $(this).removeClass("noValidate");
                                        $(this).addClass("yesValidate");
                                    }
                                }
                            }

                        else if ($(this).hasClass('telFixo')) {
                                if($(this).val() != '') {
                                    if($(this).val().length < 14) {
                                        $(this).removeClass("yesValidate");
                                        $(this).addClass("noValidate");
                                        $(this).focus(); // Importante ser primeiro

                                        divItem.css({'border':'0.050em solid #E74C3C'}); // Vermelho
                                        inputIcon.css({'background-position':'0 -3.6em'});
                                        label.hide();
                                        labelValidateOk.hide();
                                        labelValidateError.css({'color':'#E74C3C'});
                                        labelValidateError.show();
                                        spanErrorDescription.show().html("Formato de telefone incorreto!");
                                        
                                        return false;
                                    } else {
                                        $(this).removeClass("noValidate");
                                        $(this).addClass("yesValidate");
                                    }
                                }
                            }
                        } else {
                            $(this).removeClass("noValidate");
                            $(this).addClass("yesValidate");
                        }
                    }
                }
            }
        });

        if(form.find(".noValidate").length) {
            // Return false
        } else {
            // Submit Form
            form.submit();
        }
    });
    
    // Ao carregar, o campo usuário recebe o (Focus)
    //$('.user').focus();
});