require("dotenv").config();
const mongoose = require('mongoose');

const Connect = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected successfully')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = Connect;