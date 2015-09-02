// Copy this file to filename settings.js in the same dir (app) and fill in your actual settings

module.exports = {
    email: {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        user: 'digitalle@mail.ru',
        pass: 'PASSWORD',
        from: 'digitalle@mail.ru',
        to: 'reciever@mail.com'
    },
    recaptcha: {
        public_key: 'PUBLIC',
        secret_key: 'SECRET'
    }
};
