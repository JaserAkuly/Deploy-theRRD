$(function() {
    $.validator.setDefaults({
        errorClass: 'error-view',
        validClass: 'success-view',
        errorElement: 'span',

        highlight: function (element, errorClass, validClass) {
            var $form = $(element).closest('form');
            if ($form.hasClass('j-form')) {
                $(element).closest('.input').removeClass(validClass).addClass(errorClass);
                if ($(element).is(':checkbox') || $(element).is(':radio')) {
                    $(element).closest('.check').removeClass(validClass).addClass(errorClass);
                }
            } else {
                $(element).closest('.form-group').addClass('has-error');
            }
        },

        unhighlight: function (element, errorClass, validClass) {
            var $form = $(element).closest('form');
            if ($form.hasClass('j-form')) {
                $(element).closest('.input').removeClass(errorClass).addClass(validClass);
                if ($(element).is(':checkbox') || $(element).is(':radio')) {
                    $(element).closest('.check').removeClass(errorClass).addClass(validClass);
                }
            } else {
                $(element).closest('.form-group').removeClass('has-error');
            }
        },

        errorPlacement: function (error, element) {
            var $form = $(element).closest('form');
            if ($form.hasClass('j-form')) {
                if ($(element).is(':checkbox') || $(element).is(':radio')) {
                    $(element).closest('.check').append(error);
                } else {
                    $(element).closest('.unit').append(error);
                }
            } else {
                if (element.attr('type') == "checkbox") {
                    element.closest('.controls').children(0).prepend(error);
                }
                else if (element.attr('type') == "radio") {
                    element.closest('.controls').children(0).prepend(error);
                }
                else
                    error.insertAfter(element);
            }
        }
    });

    $.validator.addMethod("letterswithbasicpunc", function(value, element) {
        return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
    }, "Letters or punctuation only please");

    $.validator.addClassRules('letterswithbasicpunc', {letterswithbasicpunc: true});


    $('.js-phone-input').mask('(999) 999-9999', {placeholder: '_'});

    $('.js-validate').each(function(i, form) {
        $(form).validate();
    });
});
