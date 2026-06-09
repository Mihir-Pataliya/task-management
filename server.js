require('dotenv').config()
const app=require('./src/app')
const moongoose=require('mongoose')


const PORT=process.env.PORT || 3000
const Mongo_URI=process.env.MONGO_URI

moongoose.connect(Mongo_URI)
.then(()=>{
    console.log('MongoDb connected successfully');
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error)=>{
    console.error('Error connecting to MongoDB:', error);
})