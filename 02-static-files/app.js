
/* We  import / declare / call  all the Node JS modules we need */

// express 
const express = require('express');

// path
const path = require('path');


// we declare / initialize the server 
const app = express(); 


// app.get('/', (req, res) => {

//     // res.send sends an answer then stops the server
// 	res.send("Hello World");

// });


app.use('/public', express.static(path.join(__dirname, 'public')));


/*
    Commands to try out 

        http GET localhost:5001/public/html/error500.html
        
        http GET localhost:5001/public/html/error404.html
    
        http GET localhost:5001/public/style.css
    
        http GET localhost:5001/public/alert.js
*/


// we serve / listen on 5001  
app.listen(5001);
