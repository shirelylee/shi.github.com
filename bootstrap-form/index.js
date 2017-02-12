$(function() {
    $('form').bootstrapValidator({　　　　　　　　
        message: 'This value is not valid',
        　feedbackIcons: {　　　　　　　　
            valid: 'glyphicon glyphicon-ok',
            　　　　　　　　invalid: 'glyphicon glyphicon-remove',
            　　　　　　　　validating: 'glyphicon glyphicon-refresh'　　　　　　　　
        },
        fields: {
            name: {
                message: 'failed',
                validators: {
                    notEmpty: {
                        message: 'name can not be blank.'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'email can not be blank.'
                    },
                    emailAddress: {
                        message: 'the format is wrong.'
                    }
                }
            },
            subject: {
                validators: {
                    notEmpty: {
                        message: 'subject can not be blank.'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: 'the length need to between 6 and 18'
                    }
                }
            },
            message: {
                validators: {
                    notEmpty: {
                        message: 'message can not be blank.'
                    }
                }
            },
            /* form submit trigger
            submitHandler: function(validators, form, submitButton) {
                alert("Submit");
            }  */
        }
    });
});
