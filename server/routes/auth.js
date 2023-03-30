const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../mongodb/modals/User");

//Register
router.post("/register", async (req, res) => {
    const { username, password, email} =  req.body;
    try{
        const salt = await bcrypt.genSalt(9);
        const hasPassword = await bcrypt.hash( password, salt);
        const newUser = new User({
            username,
            email,
            password : hasPassword
        });
        const user = await newUser.save();
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

//Login
router.post("/login", async (req, res) => {
    const { username, password} = req.body;
    console.log(req.body);
    try{
        const user = await User.findOne({username});
        !user && res.status(400).json({message: "invalid creds"});
        const validated = await bcrypt.compare( password, user.password);
        !validated && res.status(400).json({message: "invalid creds"});
        res.status(200).json(user);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router