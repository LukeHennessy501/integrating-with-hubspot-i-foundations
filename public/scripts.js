// Website Functionality
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const priority = document.getElementById('priority').value;

    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Name:', name);
    console.log('Contact Info:', contact);
    console.log('Priority:', priority);
    createTicket(title, description, priority, name, contact);
});

//TODO:Function to assemble ticket object for post
function createTicket(reason, value, priority, name, email) {
    // Properties needed
    // - Associations --> User/search with name or email
    const ticket = [
        {   
            // - Pipeline --> Support?
            "name": "hs_pipeline",
            "value": "0"
        },
        {   
            // - Status --> New
            "name": "hs_pipeline_stage",
            "value": "1"
        },
        {
            // - Ticket Name --> User
            "name": "subject",
            "value": reason
        },
        {
            // - Description --> User
            "name": "content",
            "value": value
        },
        {
            // - Priority --> User
            "name": "hs_ticket_priority",
            "value": priority
        }
    ];
    console.log(ticket);
}

// // Import Axios
// import { post } from 'axios';
// // Website Functionality
// document.getElementById('userForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const name = document.getElementById('name').value;
//     const contact = document.getElementById('contact').value;
//     const priority = document.getElementById('priority').value;

//     console.log('Title:', title);
//     console.log('Description:', description);
//     console.log('Name:', name);
//     console.log('Contact Info:', contact);
//     console.log('Priority:', priority);
    
//     // Send user input data to the server
//     post('/send', {
//         title: title,
//         description: description,
//         name: name,
//         contact: contact,
//         priority: priority
//     }).then(response => {
//         // Handle response from the server if needed
//         console.log(response.data);
//     }).catch(error => {
//         console.error(error);
//     });
// });

// //TODO:Function to assemble ticket object for post
// function createTicket(reason, value, priority, name, email) {
//     // Create ticket object
//     const ticket = [
//         {   
//             "name": "hs_pipeline",
//             "value": "0"
//         },
//         {   
//             "name": "hs_pipeline_stage",
//             "value": "1"
//         },
//         {
//             "name": "subject",
//             "value": reason
//         },
//         {
//             "name": "content",
//             "value": value
//         },
//         {
//             "name": "hs_ticket_priority",
//             "value": priority
//         }
//     ];
//     return ticket;
// }


//TODO:Authentification for posting
//TODO:Function to get contacts/associations
//TODO:Function to send ticket to Hubspot
//TODO:Display something on success or failure
//TODO:Button to go to page for viewing ticket status

