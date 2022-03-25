const mongoose = require('mongoose');

require('dotenv').config();
 
const mongo_url = 'mongodb+srv://crud_user:2myLi4sLwz8UJhwD@cluster0.je5h4.mongodb.net/users?retryWrites=true&w=majority'

const connectDB = async()=>{
    
        mongoose.connect(mongo_url,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:false,
            // useCreateIndex:true
        }).then(()=>{
            console.log(`MongoDb Connected `); 
        })
    .catch ((error)=> {
        console.log(error);
        process.exit(1);
    });
}

module.exports = connectDB;