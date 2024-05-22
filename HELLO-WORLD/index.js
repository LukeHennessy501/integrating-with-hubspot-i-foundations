const express = require('express');
const axios = require('axios');

const app = express();

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/public'));
// removed private app secret in order to push

app.get('/contacts', async (req, res) => {
    const contacts = 'https://api.hubspot.com/crm/v3/objects/contacts';
    const headers = {
                Authorization: `Bearer ${private_app_token}`,
                'Content-Type': 'application/json'
    }
    try {
        const response = await axios.get(contacts, { headers });
        // const data = response.data;
        // res.json(data);
        const data = response.data.results;
        res.render('contacts', { title: 'Contacts | HubSpot APIs', data });   
    } catch (error) {
        console.error(error);
    }   
});

app.listen(3000, () => console.log('Listening on http://localhost:3000'));


// app.set('view engine', 'pug');

// app.use(express.static(__dirname + '/public'));

// const PRIVATE_APP_ACCESS = "";

// app.get('/contacts', async (req, res) => {

//     const contacts = 'https://api.hubspot.com/crm/v3/objects/contacts';
//     const headers = {
//         Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
//         'Content-Type': 'application/json'
//     }

//     try {
//         const resp = await axios.get(contacts, { headers });
//         const data = resp.data.results;
//         res.render('contacts', { title: 'Contacts | HubSpot APIs', data });      
//     } catch (error) {
//         console.error(error);
//     }

// });




