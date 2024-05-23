// const express = require('express');
// const axios = require('axios');
// require('dotenv').config();

// const app = express();
// app.use(express.json()); // Middleware to parse JSON request bodies
// app.set('view engine', 'pug'); // Set Pug as the view engine

// // Serve static files (CSS, JavaScript, etc.) from the public directory
// app.use(express.static(__dirname + '/public'));

// // Route to render the user input form
// app.get('/', (req, res) => {
//     res.render('tickets');
// });

// // Route to handle form submission
// app.post('/submit', async (req, res) => {
//     // Extract user input data from the request body
//     const { title, description, name, contact, priority } = req.body;
    
//     // Create ticket object using the createTicket function
//     const ticket = createTicket(title, description, priority, name, contact);
//     // const ticket = createTicket(req.body.title, req.body.description, req.body.priority, req.body.name, req.body.contact);
    
//     // Log the ticket object
//     console.log('Ticket:', ticket);
    
//     // Send the ticket to HubSpot (assuming this is the endpoint for creating tickets)
//     try {
//         const response = await axios.post('https://api.hubspot.com/crm/v3/objects/tickets', ticket, {
//             headers: {
//                 Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
//                 'Content-Type': 'application/json'
//             }
//         });
//         console.log('Ticket created successfully:', response.data);
//         // res.redirect('back');
//     } catch (error) {
//         console.error(error);
//     }

// });

// // Start the server
// app.listen(3000, () => console.log('Listening on http://localhost:3000'));

// function createTicket(reason, value, priority, name, email) {
//     // Properties needed for the ticket object
//     const ticket = {
//         "properties": [
//             {   
//                 "name": "hs_pipeline",
//                 "value": "0"
//             },
//             {   
//                 "name": "hs_pipeline_stage",
//                 "value": "1"
//             },
//             {
//                 "name": "subject",
//                 "value": reason || "No Subject"
//             },
//             {
//                 "name": "content",
//                 "value": value || "No Content"
//             },
//             {
//                 "name": "hs_ticket_priority",
//                 "value": priority || "low"
//             }
//         ]
//     };
//     return ticket;
// }

const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.set('view engine', 'pug'); // Set Pug as the view engine

// Serve static files (CSS, JavaScript, etc.) from the public directory
app.use(express.static(__dirname + '/public'));

// Route to render the user input form
app.get('/', (req, res) => {
    res.render('tickets');
});

// Route to handle form submission
app.post('/submit', async (req, res) => {
    const ticket = 
    {
        "properties": {
            "hs_pipeline": "0",
            "hs_pipeline_stage": "1",
            "hs_ticket_priority": req.body.priority,
            "subject": req.body.title,
            "content": req.body.description
        }
    }
      

    ///Example request body

    console.log('Ticket:', ticket);

    // Send the ticket to HubSpot (assuming this is the endpoint for creating tickets)
    try {
        const tickets = 'https://api.hubapi.com/crm/v3/objects/tickets';
        const headers = {
            Authorization: `Bearer ${PRIVATE_APP_ACCESS}`,
            'Content-Type': 'application/json'
        }
        const response = await axios.post(tickets, ticket, headers);
        console.log('Ticket created successfully:', response.data);
        // res.redirect('back');
    } catch (error) {
        console.error(error);
    }
});

// Start the server
app.listen(3000, () => console.log('Listening on http://localhost:3000'));

