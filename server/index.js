const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const multer = require("multer");
const {connectDB} = require("./mongodb/connectdb");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const catsRoute = require("./routes/categories");
const postsRoute = require("./routes/posts");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
});

const upload = multer({storage: storage});

app.post("/api/upload", upload.single("file") , (req, res) => {
    res.status(200).json("file has been uploaded");
} )

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/categories", catsRoute);
app.use("/api/posts", postsRoute);


const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log('Server started on port 8080'));
    } catch (error) {
        console.log(error);
    }
  };
    
startServer();