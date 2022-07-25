require('dotenv').config();
const mongoUser = process.env.MONGO_USER;
const mongoPass = process.env.MONGO_PASSWORD;

module.exports = {
    dataBase: {
        host: `mongodb+srv://${mongoUser}:${mongoPass}@cluster0.6w3wkwm.mongodb.net/?retryWrites=true&w=majority`
    }
}