const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the static frontend (public/index.html, style.css, script.js, etc.)
const PUBLIC_DIR = path.join(__dirname, "..", "public");
app.use(express.static(PUBLIC_DIR));

// ---------------------------------------------------------------------------
// Database connection
// ---------------------------------------------------------------------------
// Connection details come from environment variables so the project can run
// against ANY MySQL-compatible database (a free cloud database like Aiven,
// Railway, or Clever Cloud, or a local MySQL server) without ever committing
// real credentials to source control.
//
// See ../SETUP.md for step-by-step instructions on creating a free cloud
// database and filling in your .env file.
// ---------------------------------------------------------------------------
const requiredEnvVars = ["DB_HOST", "DB_USER", "DB_NAME"];
const missing = requiredEnvVars.filter((key) => !process.env[key]);

if (missing.length) {
  console.error(
    `\nMissing required environment variable(s): ${missing.join(", ")}.\n` +
    `Copy .env.example to .env and fill in your database credentials.\n` +
    `See SETUP.md for a step-by-step guide.\n`
  );
  process.exit(1);
}

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME,
};

// Most free cloud MySQL providers (Aiven, TiDB Cloud, PlanetScale, etc.)
// require an encrypted connection. Set DB_SSL=true in your .env for those.
if (process.env.DB_SSL === "true") {
  dbConfig.ssl = { rejectUnauthorized: process.env.DB_SSL_REJECT_UNAUTHORIZED !== "false" };
}

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    console.error("Double-check the values in your .env file against SETUP.md.");
    process.exit(1);
  }
  console.log(`Connected to database "${dbConfig.database}" at ${dbConfig.host}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, "index.html"));
});

app.get("/health", (req, res) => {
  connection.ping((err) => {
    if (err) return res.status(500).json({ status: "db unreachable" });
    res.json({ status: "ok" });
  });
});

// --- USERS ---
app.get("/viewUsers", (req, res) => {
  connection.query("SELECT * FROM users", (err, results) => { if (err) res.send(err); else res.json(results); });
});
app.post("/addUser", (req, res) => {
  const { username, email, password } = req.body;
  connection.query("INSERT INTO users(username,email,password) VALUES(?,?,?)", [username, email, password], (err) => { if (err) res.send(err); else res.send("User added"); });
});
app.put("/updateUser", (req, res) => {
  const { user_id, username, email, password } = req.body;
  connection.query("UPDATE users SET username=?, email=?, password=? WHERE user_id=?", [username, email, password, user_id], (err) => { if (err) res.send(err); else res.send("User updated"); });
});
app.delete("/deleteUser", (req, res) => {
  const { user_id } = req.body;
  connection.query("DELETE FROM users WHERE user_id=?", [user_id], (err) => { if (err) res.send(err); else res.send("User deleted"); });
});

// --- POSTS ---
app.get("/viewPosts", (req, res) => {
  connection.query("SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id=users.user_id", (err, results) => { if (err) res.send(err); else res.json(results); });
});
app.post("/addPost", (req, res) => {
  const { post_content, user_id } = req.body;
  connection.query("INSERT INTO posts(post_content,user_id) VALUES(?,?)", [post_content, user_id], (err) => { if (err) res.send(err); else res.send("Post added"); });
});
app.put("/updatePost", (req, res) => {
  const { post_id, post_content } = req.body;
  connection.query("UPDATE posts SET post_content=? WHERE post_id=?", [post_content, post_id], (err) => { if (err) res.send(err); else res.send("Post updated"); });
});
app.delete("/deletePost", (req, res) => {
  const { post_id } = req.body;
  connection.query("DELETE FROM posts WHERE post_id=?", [post_id], (err) => { if (err) res.send(err); else res.send("Post deleted"); });
});

// --- COMMENTS ---
app.get("/viewComments", (req, res) => {
  connection.query("SELECT comments.*, users.username, posts.post_content FROM comments JOIN users ON comments.user_id=users.user_id JOIN posts ON comments.post_id=posts.post_id", (err, results) => { if (err) res.send(err); else res.json(results); });
});
app.post("/addComment", (req, res) => {
  const { comment_content, user_id, post_id } = req.body;
  connection.query("INSERT INTO comments(comment_content,user_id,post_id) VALUES(?,?,?)", [comment_content, user_id, post_id], (err) => { if (err) res.send(err); else res.send("Comment added"); });
});
app.put("/updateComment", (req, res) => {
  const { comment_id, comment_content } = req.body;
  connection.query("UPDATE comments SET comment_content=? WHERE comment_id=?", [comment_content, comment_id], (err) => { if (err) res.send(err); else res.send("Comment updated"); });
});
app.delete("/deleteComment", (req, res) => {
  const { comment_id } = req.body;
  connection.query("DELETE FROM comments WHERE comment_id=?", [comment_id], (err) => { if (err) res.send(err); else res.send("Comment deleted"); });
});

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
