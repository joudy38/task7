let users = require("../models/users"); 
let posts = require("../models/posts"); 
class UserControllers {

    getAll = (req,res) =>{
        res.status(200).json({
            message : "Get All Data" ,
            data : users 
        })
    }

    getOne = (req,res) =>{
        const id = req.params.id ; 
        const user = users.find( e => e.id == id); 
        if(!user) return res.status(404).json({
            message : "User Not Found" 
        })
        return res.status(200).json({
            message : "Get User Successfully" ,
            data : user 
        })
    }

    add = (req,res) =>{
        const {username , fullName , email , avatar , bio} = req.body ;
        const emails = users.find(e => e.email == emails); 
        if(emails) return res.status(400).json({
            message : "Invalid email"
        })

        const usernames= users.find(e => e.username == usernames) ; 
        if(usernames) return res.status(400).json({
            message : "Username alreade exists"
        })

        const data = users.push(
            id = Math.random() * Math.random(),
            role = "user",
            {username , fullName , email , avatar , bio},
            createdAt = new Date() )

            return res.status(201).json({
            message : "Aded User Successfully" ,
            data 
        })
        }
    
    update = (req,res) =>{

        const id = req.params.id ;
        const user = users.find( e => e.id == id);
        if (!user) return res.status(404).json({
            message : "User not found" 
        })
        const {fullName , bio , avatar } = req.body ;
        user.fullName = fullname || user.fullName ; 
        user.avatar = avatar || user.avatar; 
        user.bio = bio || user.bio ;
        res.status(200).json({
            message : " User Updated " ,
            data : user 
        })
    }
    remove = (req,res) => {
        const id = req.params.id ;
        const user = users.find( e => e.id == id);
        if (!user) return res.status(404).json({
            message : "User not found" 
        })
        users = users.filter(e => e.id !== id); 
        res.status(200).json({
            message : " User is deleted " ,
        })
    } 

    getAllPosts = (req,res) =>{
        const userId = req.params.id;
        const user = users.find( e => e.id == id);
        if (!user) return res.status(404).json({
            message : "User not found" 
        })
        const userPosts = posts.filter(p => p.userId == userId) ;
        res.status(200).json({
            message : " All Posts " ,
            data : userPosts 
        })
    }  
    } 

module.exports = new UserControllers(); 
