require("dotenv").config(); 
const express = require("express"); 
const app = express(); 
const morgan = require("morgan");

// middlewares 
app.use(express.json()); 
app.use(morgan("dev")); 

// Routes 
const usersRoutes = require('./routes/users.routes');
const postsRoutes = require('./routes/posts.routes');
const commentsRoutes = require('./routes/comments.routes');

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/posts', postsRoutes);
app.use('/api/v1/comments', commentsRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT , () => {
    console.log("Server is running"); 
}) 