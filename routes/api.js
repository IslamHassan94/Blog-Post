const express = require("express");
const router = express.Router();
const BlogPost = require("../models/blogPost");


//Routes
router.get("/", (req, res) =>{
    const data = {
        username: "Islam",
        age: 26
    };
    BlogPost.find()
    .then((data) =>{
        console.log('Data:', data);
        res.json(data);
    })
    .catch((err) =>{
        console.log('error:', err);
    })

});

router.post("/save", (req, res) =>{
    const data = req.body;
    const newBlogPost = new BlogPost(data);

    newBlogPost.save((err) => {
        if(err){
            res.status(500).json({msg: "Sorry Internal server Err"})

        } else {
            //BlogPost
            res.json({
            msg: "Your Data has been Saved!!!!"
    });
        }
    })
});

router.get("/name", (req, res) =>{
    const data = {
        username: "Hassan",
        age: 26
    };
    res.json(data);
});


module.exports = router;