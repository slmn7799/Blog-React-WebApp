const router = require("express").Router();
const Category = require("../mongodb/modals/Category");

router.post("/", async ( req, res ) => {
    const newCats = new Category(req.body);
    try{
        const savedCats = await newCats.save();
        res.status(200).json(savedCats);
    }catch(err){
        res.status(500).json(err);
    }
});

router.get("/", async ( req, res ) => {
    try{
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;