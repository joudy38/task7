const comments = require("../models/comments")
let users = require("../models/users"); 
let posts = require("../models/posts"); 
class CommentControllers { 

    getAll = (req,res) =>{
         res.status(200).json({
            message : "Get All Data" ,
            data : comments 
        })
    }

    getOne = (req,res) =>{
        const id = req.params.id ; 
        const comment = comments.find( e => e.id == id); 
        if(!comment) return res.status(404).json({
            message : "Comment Not Found" 
        })
        return res.status(200).json({
            message : "Get Comment Successfully" ,
            data : comment 
        })
    }

    add = (req,res) =>{
        const postid = comments.find(e => e.postId == postid); 
        if(!postid) return res.status(400).json({
            message : "Invalid postId"
        }) 

        const userid = comments.find(e => e.userId == userid); 
        if(!userid) return res.status(400).json({
            message : "Invalid userId"
        })

        const Text = comments.find(e => e.text == Text); 
        if(!Text) return res.status(400).json({
            message : "Invalid Text"
        })

        const {postId , userId , text} = req.body ;
        const data = comments.push(
            id = Math.random() * Math.random(),
            {postId , userId , text},
            createdAt = new Date() )

            return res.status(201).json({
            message : "Aded Comment Successfully" ,
            data 
        })
    }

    updat = (req,res) =>{
        const id = req.params.id ;
        const comment = comments.find( e => e.id == id);
        if (!comment) return res.status(404).json({
            message : "Comment not found" 
        })

        const {userId , postId , text} = req.body ;
        comment.userId = userId || comment.userId ;
        comment.postId = postId || comment.postId ; 
        comment.text = text || comment.text; 

        res.status(200).json({
            message : " Comment Updated " ,
            data : comment
        })   
    }

    remove = (req,res) =>{
        const id = req.params.id ;
        const comment = comments.find( e => e.id == id);
        if (!comment) return res.status(404).json({
            message : "Comment not found" 
        })
        comments = comments.filter(e => e.id !== id); 
        res.status(200).json({
            message : " Comment is deleted " ,
        })
    } 

}

module.exports = new CommentControllers(); 