const axios = require('axios');

axios.get(`https://criapi.vercel.app/`)
    .then(function(response) {
        const data = response.data;
        console.log(data);
    })
    .catch(function(error) {
        console.log(error);
    })