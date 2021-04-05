const mongoose = require('mongoose');

const mongo = 'mongodb+srv://Rasa:jebemliga1@cluster0.kjbcs.mongodb.net/sliceanddice?retryWrites=true&w=majority'

const connectDB = async () => {
    const connect = await mongoose.connect(mongo,{
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFindAndModify: false,
        useUnifiedTopology: true
    }); 

    console.log(`MongoDB Connected: ${connect.connection.host}`) 
}

module.exports = connectDB;