import sendRequest from "./send-request";
const INITIAL_URL = 'https://s.activision.com/activision/login'


fetch("https://s.activision.com/activision/login", {
        "method": "GET",
        "mode": "no-cors",
        "headers": {
            "Content-Type": 'application/json',
        }
    })
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
        