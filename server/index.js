const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {connectDB} = require("./mongodb/connectdb");
const authRoute = require("./routes/auth");


const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoute);


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
        console.log(error);
    }
  };
    
startServer();