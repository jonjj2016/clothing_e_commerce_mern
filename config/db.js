const mongoose = require('mongoose');
const connectDb = async() => {
    const connection = await mongoose.connect((process.env.MONGO_DB_LOCAL), {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log(`Connected to db `)
};
module.exports = connectDb;