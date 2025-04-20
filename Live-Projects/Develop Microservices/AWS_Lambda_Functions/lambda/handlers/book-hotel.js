const nodeFetch = require('node-fetch');
function bookRegister() {
    return nodeFetch('https://6h5f8gp6d1.execute-api.us-east-1.amazonaws.com/Prod/hotel')
        .then(res => res.json())
        .then(json => json);
}