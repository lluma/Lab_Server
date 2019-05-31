const fs = require('fs');

const users = [
        {
            "email": "test@aaa.com",
            "password": "123",
            "status": "logout"
        },
        {
            "email": "admin",
            "password": "000",
            "status": "logout"
        }
];

function auth(email, password) {
    var valid = false;
    var errText = '';
    var status = "";
    return new Promise((resolve, reject) => {
       users.map(user => {
            if (user.email === email && user.password === password) {
                valid = true;
                status = "loggin";
            }
            else if (user.email === email || user.password === password) {
                errText = 'Invalid email or password';
            }
       });
       
       resolve({
           "valid": valid,
           "errText": errText,
           "status": status
       });
    });
}

module.exports = {
    auth
};