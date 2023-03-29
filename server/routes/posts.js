const router = require("express").Router();
const User = require("../mongodb/modals/User");
const Post = require("../mongodb/modals/Post");

//create a post
router.post("/", async ( req, res ) => {
    const newPost = new Post( req.body );
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
});

//update a post
router.put("/:id", async ( req, res ) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                },
                {new: true});
                res.status(200).json(updatedPost);
            }catch(err){
                res.status(500).json(err);
            }
        } else{
            res.status(400).json({message: "not authorized to edit"});
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//delete a post
router.delete("/:id", async ( req, res ) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try{
                await post.delete();
                res.status(200).json("post deleted");
            }catch(err){
                res.status(500).json(err);
            }
        } else{
            res.status(400).json({message: "not authorized to edit"});
        }
    }catch(err){
        res.status(500).json(err);
    }
});

//get a post
router.get("/:id", async ( req, res ) => {
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});

//get all posts
router.get("/", async ( req, res ) => {
    try{
        const username = req.query.user;
        const catname = req.query.cat;

        let posts;
        if(username){
            posts = await Post.find({username});
        } else if(catname){
            posts = await Post.find({
                categories:{ 
                    $in : [catname],
                }
            });
        } else{
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;