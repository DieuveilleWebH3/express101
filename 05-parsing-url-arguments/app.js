
/* We  import / declare / call  all the Node JS modules we need */

// express 
const express = require('express');


// we declare / initialize the server 
const app = express(); 



app.get('/:arg1/blabla/:arg2', (req, res) => {

	console.log(req.params)

    // res.send sends an answer then stops the server
	res.send(req.params);
});


/*
    Commands to try out 

        http GET :5001/hey/blabla/2
        
        http GET :5001/hello/blabla/world
        
        http GET :5001/John/blabla/25

    Response

        {
            "hello": "hey",
            "valeur": "2"
        }

        {
            "arg1": "hello",
            "arg2": "world"
        }

        {
            "arg1": "John",
            "arg2": "25"
        }
*/


// we serve / listen on 5001  
app.listen(5001);
