
/* We  import / declare / call  all the Node JS modules we need */

// express 
const express = require('express');


// we declare / initialize the server 
const app = express(); 



// Middlewares definition 
function logRequest1(req, res, next) {
	console.log("Middleware#1", " - Method ", req.method, " - URL ", req.url);

	next();
};

function logRequest2(req, res, next) {
	console.log("Middleware#2", " - Method ", req.method, " - URL ", req.url);

	next();
};


/* Execution depends on the order of app.use */

/* calling middlewares */

// Middlewares are directly passed like callback functions 
app.use(logRequest1); 
app.use(logRequest2); 
app.use(logRequest2); 
app.use(logRequest1); 



app.get('/', (req, res) => {

	console.log("Hello World")

    // res.send sends an answer then stops the server
	res.send("Hello World");
});


app.get('/hey', (req, res) => {

	console.log("HO")

    // res.send sends an answer then stops the server
	res.send("HO");
})



// we serve / listen on 5001  
app.listen(5001);
