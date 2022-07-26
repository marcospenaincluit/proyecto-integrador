require('dotenv').config();
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASSWORD;

module.exports = {
    database:{
        host:`mongodb+srv://${mongoUser}:${mongoPass}@cluster0.cxa6kgy.mongodb.net/?retryWrites=true&w=majority`
    }
}