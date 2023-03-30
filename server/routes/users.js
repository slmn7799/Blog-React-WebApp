const router = require("express").Router();
const User = require("../mongodb/modals/User");
const Post = require("../mongodb/modals/Post");
const bcrypt = require("bcrypt");

//update a user
router.put("/:id", async ( req, res ) => {
    const { userId ,username, password } = req.body;
    if( userId === req.params.id){
        if( password ){
            const salt = await bcrypt.genSalt(9);
            const hasPassword = await bcrypt.hash(password, salt);
        }
        try{
            const user = await User.findById( userId );
            console.log(req.body);
            const updatedUser = await User.findByIdAndUpdate( userId, {
                
                $set : {
                    username: req.body.username ? req.body.username : user.username,
                    email: req.body.email ? req.body.email : user.email,
                    profilePic: req.body.profilePic ? req.body.profilePic : user.profilePic
                }
            },
            {new : true});
            res.status(200).json(updatedUser);
        }catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(400).json({message : "not your account"});
    }
});

//delete a user
router.delete("/:id", async ( req, res ) => {
    const { userId ,username, password } = req.body;
    if( userId === req.params.id){
        try{
            const user = await User.findById( userId );
            await Post.deleteMany({ username });
            await User.findByIdAndDelete( userId );
            res.status(200).json({ message: "user deleted"});
        }catch(err){
            res.status(500).json(err);
        }
    } else{
        res.status(400).json({message : "not your account"});
    }
});

//get a user
router.get("/:id", async ( req, res ) => {
    try{
        const user = await User.findById(req.params.id);
        const { password, ...other} = user;
        res.status(200).json(other);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;