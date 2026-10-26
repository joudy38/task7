const express = require("express");
const commentControllers = require("../controllers/comments.controller")
const router = express.Router(); 

router.get("/" , commentControllers.getAll); 
router.get("/:id" ,commentControllers.getOne);
router.post("/" , commentControllers.add);
router.patch("/:id" , commentControllers.updat); 
router.delete("/:id" , commentControllers.remove); 

module.exports = router 