const express = require("express")
const bodyParser = require("body-parser")
const app= express();
const db=require('./db');
const config =require('./config/database')
const employee=require('./routes/employee')
app.use(bodyParser.json());
app.use('/employee',employee);


db.connect(config.database, function (err) {
	if (err) {
		console.log("Unable to connect to Mongo....", err)
		process.exit(1)
	} else {
		app.listen(8080, () => console.log(`Server Running at Port`))
	}
})
