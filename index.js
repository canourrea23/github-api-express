const express = require('express');

const axios = require('axios');
const { response } = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {    
    axios.get('https://api.github.com/users/canourrea23')
    .then(response => {
        // console.log(response.data);
        const carolinaObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(carolinaObject);

        res.send(carolinaObject);
    })
});

// sei1019 route
app.get('/nitish', (req, res) => {    
    axios.get('https://api.github.com/users/nitishdayal')
    .then(response => {
        // console.log(response.data);
        const nitishObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(nitishObject);

        res.send(nitishObject);
    })
});


app.get('/ariel', (req, res) => {    
    axios.get('https://api.github.com/users/ajstrizzy')
    .then(response => {
        // console.log(response.data);
        const arielObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(arielObject);

        res.send(arielObject);
    })
});

app.get('/ashton', (req, res) => {    
    axios.get('https://api.github.com/users/Swolepenguin')
    .then(response => {
        // console.log(response.data);
        const ashtonObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(ashtonObject);

        res.send(ashtonObject);
    })
});

app.get('/ruben', (req, res) => {
    axios.get('https://api.github.com/users/anonyymous1')
    .then(response => {
        const rubenObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(rubenObject);
        res.send(rubenObject);
    })
});

app.get('/nicole', (req, res) => {
    axios.get('https://api.github.com/users/NikkiHmltn')
    .then(response => {
        const nicoleObject = {
            login: response.data.login,
            url: response.data.html_url,
            name: response.data.name
        };
        console.log(nicoleObject);
        res.send(nicoleObject);
    })
});



app.listen(PORT, () => {
    console.log(`Woure vibing to the sounds on PORT ${PORT}🎧`);
});
