const express = require('express');
const path = require('path');
const mysql = require('mysql2');
const config = require('./config.js').database;
const app = express();
const port = 5000;

const connection = mysql.createConnection({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database,
  multipleStatements: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/login', (req, res) => {
	let query = 'SELECT * FROM user WHERE email="' + req.body.email + '" AND password="' + req.body.password +'";'
	connection.query(
	  query,
	  function(err, results, fields) {
	  	if (err) {
	  		res.send('Error')
	  	} else {
	    	res.send('Success! Hello. This is your information: ' + JSON.stringify(results));
	  	}
	  }
	);
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});
