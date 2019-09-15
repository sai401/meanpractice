const ObjectID = require("mongodb").ObjectID
const db = require('../db');

const addEmployee = async (empData) => {
    try {
        return await db.getCollection('empCollection').insertOne(empData);
    }
    catch (e) {
        throw e;
    }
}

const getAllEmployees = async () => {
    try {
        return await db.getCollection('empCollection').find().toArray();
    }
    catch (e) {
        throw e;
    }
}

const updateEmployee = async (empId, employee) => {
    try {
        return await db.getCollection('empCollection').updateOne({ _id: ObjectID(empId) }, { $set: employee });

    }
    catch (e) {
        throw e;
    }
}
//delete employee based on id

//get all employees

module.exports = { addEmployee, getAllEmployees, updateEmployee };