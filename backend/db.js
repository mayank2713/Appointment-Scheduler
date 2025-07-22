const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://mayankchoure2002:12345@cluster0.d4mgvc.mongodb.net/"


// const connectToMongo = () => {
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to mongoose successfully")
//     })
// }
async function connectToMongo() {
    await mongoose.connect(mongoURI).then(()=> console.log("Connected to Mongo Successfully")).catch(err => console.log(err));
  }

module.exports = connectToMongo;
