
/* We  import / declare / call  all the Node JS modules we need */

// express 
const express = require('express');


// we declare / initialize the server 
const app = express(); 


// this is deprecated 
// app.use(express.urlencoded);

// this is the new way 
app.use(express.urlencoded({extended:true}));

app.post('/', (req, res) => {

	console.log(req.body)

    // res.send sends an answer then stops the server
	res.send(req.body);
});


/*
    Commands to try out 

        http --form :5001/ hello=World valeur=2
        
        http --form :5001/ name="John" age=25

    Response

        {
            "hello": "World",
            "valeur": "2"
        }

        {
            "name": "John",
            "age": "25"
        }
*/


// we serve / listen on 5001  
app.listen(5001);
