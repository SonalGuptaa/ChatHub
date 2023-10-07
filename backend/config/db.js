const mongoose = require('mongoose');

const connectDB = async() => {
    try{
        // const conn = await mongoose.connect(process.env.MONGO_URI,{
        //     useNewUrlParser : true,
        //     useUnifiedTopology: true,
        //     // useFIndAndModify: true,
        // });
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false, // useFindAndModify should be set to false
            useCreateIndex: true // Add this option
        });
        
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    }
    catch (error){
        console.log(`Error ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;