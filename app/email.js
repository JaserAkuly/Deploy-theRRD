var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
var settings = require('./settings');
var request = require('request');

var transporter = nodemailer.createTransport(smtpTransport({
    service: 'iCloud',
    auth: {
        user: settings.email.user,
        pass: settings.email.pass
    }
}));


module.exports = function(req, res, subject, fields) {
    var recaptcha = req.body['g-recaptcha-response'];

    request('https://www.google.com/recaptcha/api/siteverify?secret=' +
            settings.recaptcha.secret_key + '&response=' + recaptcha, function(err, response, body) {

        if (!err && response.statusCode == 200 && JSON.parse(body).success) {
            var text = [];

            fields.forEach(function(field) {
                var param = req.body[field[0]];
                if (param.indexOf('[') === 0) {
                    param = JSON.parse(param);
                    param = param.join(', ');
                }
                if (param) param = param.slice(0, 500);
                text.push(field[1] + ' ' + param);
            });

            transporter.sendMail({
                from: settings.email.from,
                to: settings.email.to,
                subject: subject,
                text: text.join('\n\n')
            }, function(err, result) {
                if (err) {
                    console.log(err);
                    res.redirect('/request-error');
                } else {
                    res.redirect('/request-success');
                }
            });
        } else {
            res.redirect('/request-error');
        }
    });
};
