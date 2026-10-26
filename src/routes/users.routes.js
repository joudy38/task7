const express = require("express");
const userControllers = require("../controllers/users.controllers");
const router = express.Router(); 

router.get("/" ,userControllers.getAll); 
router.get("/:id" ,userControllers.getOne);
router.post("/" , userControllers.add);
router.patch("/:id" , userControllers.update); 
router.delete("/:id" , userControllers.remove); 
router.get("/:id/posts" , userControllers.getAllPosts); 


module.exports = router 