const express = require("express")
const Employee = require('../models/Employee');//schema
const employeeModule = require('../modules/employee');//db
const router = express.Router()

router.post('/add', async (req, res) => {
    try {
        const { name, designation, companyName, email, city, state, country } = req.body.employee;//get data from form
        const employeeData = new Employee(name, designation, companyName, email, city, state, country);//set values
        const response = await employeeModule.addEmployee(employeeData); //insert to database

        res.send("inserted successfully");

    }
    catch (e) {
        throw e;
    }
})



router.get('/login', (req, res) => {


})
router.get('/list', async (req, res) => {
    try {
        const listdata = await employeeModule.getAllEmployees();
        console.log(listdata);
        res.send(listdata)
    }
    catch (e) {
        throw e;
    }


})


router.put('/update/:id', async(req, res) => {
    try {
        const {employee} = req.body;
        const {id}=req.params;
        const response = await employeeModule.updateEmployee(id, employee); //update employee based on his id
        res.send(response);
    }
    catch (e) {
        throw e
    }

})

module.exports = router;