-- ============================================================================
-- Blog CRUD Application — Database Schema
-- Run this once against your (cloud or local) MySQL database before starting
-- the server. See ../SETUP.md for how to get a free cloud MySQL database.
-- ============================================================================

CREATE TABLE IF NOT EXISTS users (
  user_id   INT AUTO_INCREMENT PRIMARY KEY,
  username  VARCHAR(100) NOT NULL,
  email     VARCHAR(150) NOT NULL UNIQUE,
  password  VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS posts (
  post_id      INT AUTO_INCREMENT PRIMARY KEY,
  post_content TEXT NOT NULL,
  user_id      INT NOT NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
  comment_id      INT AUTO_INCREMENT PRIMARY KEY,
  comment_content TEXT NOT NULL,
  user_id         INT NOT NULL,
  post_id         INT NOT NULL,
  created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(post_id) ON DELETE CASCADE
);

-- Optional: a little starter data so the app isn't empty on first run.
INSERT INTO users (username, email, password) VALUES
  ('demo_user', 'demo@example.com', 'demo1234')
ON DUPLICATE KEY UPDATE username = username;
