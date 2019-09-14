//database connection

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');//referse to value in default.json under config folder

const connectDB = async () => {
try {
    await mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology:true});
    console.log("MongoDB Connected")
} catch(err){
    console.log(err.message);
    //exit process with failure (app will not work)
    process.exit(1);
}

}

module.exports = connectDB;