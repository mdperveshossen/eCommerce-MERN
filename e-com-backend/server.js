require('dotenv/config');
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL_LOCAL)
    .then(() => console.log("Connected to mongoDB"))
    .catch(err => console.log("mongoDB connection failed"));





const port = process.env.PORT;

app.listen(port, () => {
    console.log(`App running on port ${port}!`);
})