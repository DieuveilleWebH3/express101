
/* We  import / declare / call  all the Node JS modules we need */

// express 
const express = require('express');


// we declare / initialize the server 
const app = express(); 



app.get('/', (req, res) => {

	console.log(req.query)

    // res.send sends an answer then stops the server
	res.send(req.query);
});


/*
    Commands to try out 

        http://localhost:5001/?lg=Fr&page=2

        http GET :5001/ lg==FR page==2
        
        http://localhost:5001/?name=John&age=25
        
        http GET :5001/ name==John age==25

    Response

        {
            "lg": "Fr",
            "page": "2"
        }

        {
            "name": "John",
            "age": "25"
        }
*/


// we serve / listen on 5001  
app.listen(5001);
