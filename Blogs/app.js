const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kabowddb"
});

// --- USERS ---
app.get("/viewUsers", (req,res)=>{
  connection.query("SELECT * FROM users", (err, results)=>{ if(err) res.send(err); else res.json(results); });
});
app.post("/addUser", (req,res)=>{
  const {username,email,password} = req.body;
  connection.query("INSERT INTO users(username,email,password) VALUES(?,?,?)",[username,email,password],(err)=>{ if(err) res.send(err); else res.send("User added"); });
});
app.put("/updateUser", (req,res)=>{
  const {user_id,username,email,password} = req.body;
  connection.query("UPDATE users SET username=?, email=?, password=? WHERE user_id=?",[username,email,password,user_id],(err)=>{ if(err) res.send(err); else res.send("User updated"); });
});
app.delete("/deleteUser", (req,res)=>{
  const {user_id} = req.body;
  connection.query("DELETE FROM users WHERE user_id=?",[user_id],(err)=>{ if(err) res.send(err); else res.send("User deleted"); });
});

// --- POSTS ---
app.get("/viewPosts", (req,res)=>{
  connection.query("SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id=users.user_id",(err,results)=>{ if(err) res.send(err); else res.json(results); });
});
app.post("/addPost", (req,res)=>{
  const {post_content,user_id} = req.body;
  connection.query("INSERT INTO posts(post_content,user_id) VALUES(?,?)",[post_content,user_id],(err)=>{ if(err) res.send(err); else res.send("Post added"); });
});
app.put("/updatePost", (req,res)=>{
  const {post_id,post_content} = req.body;
  connection.query("UPDATE posts SET post_content=? WHERE post_id=?",[post_content,post_id],(err)=>{ if(err) res.send(err); else res.send("Post updated"); });
});
app.delete("/deletePost", (req,res)=>{
  const {post_id} = req.body;
  connection.query("DELETE FROM posts WHERE post_id=?",[post_id],(err)=>{ if(err) res.send(err); else res.send("Post deleted"); });
});

// --- COMMENTS ---
app.get("/viewComments", (req,res)=>{
  connection.query("SELECT comments.*, users.username, posts.post_content FROM comments JOIN users ON comments.user_id=users.user_id JOIN posts ON comments.post_id=posts.post_id",(err,results)=>{ if(err) res.send(err); else res.json(results); });
});
app.post("/addComment", (req,res)=>{
  const {comment_content,user_id,post_id} = req.body;
  connection.query("INSERT INTO comments(comment_content,user_id,post_id) VALUES(?,?,?)",[comment_content,user_id,post_id],(err)=>{ if(err) res.send(err); else res.send("Comment added"); });
});
app.put("/updateComment", (req,res)=>{
  const {comment_id,comment_content} = req.body;
  connection.query("UPDATE comments SET comment_content=? WHERE comment_id=?",[comment_content,comment_id],(err)=>{ if(err) res.send(err); else res.send("Comment updated"); });
});
app.delete("/deleteComment", (req,res)=>{
  const {comment_id} = req.body;
  connection.query("DELETE FROM comments WHERE comment_id=?",[comment_id],(err)=>{ if(err) res.send(err); else res.send("Comment deleted"); });
});

app.listen(3001, ()=>console.log("Server running on 3001"));
