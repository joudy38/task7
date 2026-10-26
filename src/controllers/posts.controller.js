let posts = require("../models/posts"); 
let comments = require("../models/comments"); 
let users = require("../models/users");
class PostControllers { 

    getAll = (req,res) =>{
        const { tags } = req.query;
        let result = posts;
        if (tags) {
            result = posts.filter(p => p.tags && p.tags.includes(tags));
        }
        res.status(200).json({
            message : "Get All Data" ,
            data : users })
    }

    getOne = (req,res) =>{
        const id = req.params.id ; 
        const post = posts.find( e => e.id == id); 
        if(!post) return res.status(404).json({
            message : "Post Not Found" 
        })
        return res.status(200).json({
            message : "Get Post Successfully" ,
            data : post 
        })
    }

    add = (req,res) =>{
        const userid = posts.find(e => e.userId == userid); 
        if(!userid) return res.status(400).json({
            message : "Invalid post"
        })

        const Title= posts.find(e => e.title == Title) ; 
        if(Title) return res.status(400).json({
            message : "empty post"
        })

        const {userId , title , content , tags} = req.body ;
        const data = posts.push(
            id = Math.random() * Math.random(),
            like = 0 ,
            {userId , title , content , tags},
            updatedAt = new Date(), 
            createdAt = new Date() )

            return res.status(201).json({
            message : "Aded Post Successfully" ,
            data 
        })
        }

    update = (req,res) =>{
        const id = req.params.id ;
        const post = posts.find( e => e.id == id);
        if (!post) return res.status(404).json({
            message : "Post not found" 
        })
        const {userId , title , content , tags} = req.body ;
        post.userId = userId || post.userId ;
        post.title = title || post.title ; 
        post.content = content || post.content; 
        post.tags = tags || post.tags

        res.status(200).json({
            message : " Post Updated " ,
            data : post
        })   
    }

    remove = (req,res) =>{
        const id = req.params.id ;
        const post = posts.find( e => e.id == id);
        if (!post) return res.status(404).json({
            message : "Post not found" 
        })
        posts = post.filter(e => e.id !== id); 
        res.status(200).json({
            message : " Post is deleted " ,
        })
    } 

    addLike = (req,res) =>{
        const id = req.params.id
        const post = posts.find(p.id == id)
        if(!post) return res.status(404).json({
            message : "Post not found" 
        })
        post.likes = (post.likes||0) + 1 ; 
        res.status(200).json({
            message : " Like added Successfully" ,
            data : post
        })
    } 

    getAllComments = (req,res) =>{
        const postId = req.params.id ;
        const post = posts.find(p => p.id == postId); 
        if(!post) return res.status(404).json({
            message : "Post not found" 
        })
        const postComments = comments.filter(c => c.postId == postId); 
        res.status(200).json({
            message : " All Comments : " ,
            data : postComments 
        })
    }  
}
module.exports = new PostControllers(); 