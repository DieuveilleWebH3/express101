
/* We  import / declare / call  all the Node JS modules we need */

// express 
const express = require('express');

// we declare / initialize the server 
const app = express(); 


app.get('/', (req, res) => {

    // res.send sends an answer then stops the server
	res.send("Hello World");

})


app.listen(5001);
