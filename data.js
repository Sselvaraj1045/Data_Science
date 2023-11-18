const Login = require("./Models/productModel")

const localDB = "mongodb://localhost:27017"
const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  console.log("MongoDB Connected")
}
module.exports = Login;
