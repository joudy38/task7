const express = require("express");
const postControllers = require("../controllers/posts.controller");
const router = express.Router(); 

router.get("/" , postControllers.getAll); 
router.get("/:id" ,postControllers.getOne);
router.post("/" , postControllers.add);
router.patch("/:id" , postControllers.update); 
router.delete("/:id" , postControllers.remove); 
router.get("/:id/comments" , postControllers.getAllComments); 
router.post("/:id/like" , postControllers.addLike); 

module.exports = router 