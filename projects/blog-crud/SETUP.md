# Blog CRUD App — Setup Guide (XAMPP)

This project no longer hard-codes a database connection or requires anyone
to manually type out `CREATE TABLE` statements. Instead, it reads its
connection details from a `.env` file and the tables are created by running
one schema file — so your instructor can clone the repo, use their own local
XAMPP install, and be up and running in a few minutes.

## 1. Install XAMPP (if not already installed)

Download from https://www.apachefriends.org and install it. You only need
the **MySQL** and (optionally) **phpMyAdmin** components for this project —
Apache/PHP aren't required since the backend is Node.js/Express.

## 2. Start MySQL

Open the XAMPP Control Panel and click **Start** next to **MySQL**.

## 3. Create the database and tables

**Option A — phpMyAdmin (easiest):**
1. Open `http://localhost/phpmyadmin` in your browser.
2. Click **New** in the left sidebar, name the database `blog_crud`, and create it.
3. Select the new `blog_crud` database, go to the **Import** tab, choose
   `db/schema.sql` from this project, and click **Go**.

**Option B — command line:**
```bash
"C:\xampp\mysql\bin\mysql.exe" -u root < db/schema.sql
```
(On macOS/Linux, use the path to your XAMPP MySQL binary, e.g.
`/Applications/XAMPP/xamppfiles/bin/mysql`.)

Either way, this creates the `blog_crud` database with its `users`, `posts`,
and `comments` tables (and a little starter data) automatically — no manual
table creation needed.

## 4. Configure your environment

```bash
cd projects/blog-crud
cp .env.example .env
```

The defaults in `.env.example` already match a standard XAMPP setup
(`DB_HOST=localhost`, `DB_USER=root`, no password, `DB_PORT=3306`), so on
most machines you can leave `.env` as-is. If your XAMPP MySQL uses a
different user/password/port, update `.env` to match.

`.env` is already listed in `.gitignore`, so nobody accidentally commits
their local credentials.

## 5. Install dependencies and start the server

```bash
npm install
npm start
```

`npm start` uses Node's built-in `--env-file` flag to load `.env`, so you
need **Node.js 20.6 or newer** (check with `node -v`). If you're on an older
Node version, install `dotenv` (`npm install dotenv`), add
`require("dotenv").config()` to the top of `server/app.js`, and run
`npm run start:legacy-node` instead.

## 6. Open the app

Visit `http://localhost:3001`. Check the terminal for a
"Connected to database" message to confirm it's talking to your local
XAMPP MySQL.

---

### Why this approach

- Each person (you, a classmate, your instructor) runs their own local
  MySQL via XAMPP — nobody needs a shared login or an internet connection.
- Real credentials only ever live in a local, git-ignored `.env` file — the
  repository itself contains no secrets.
- `db/schema.sql` means nobody has to manually recreate the `users`,
  `posts`, and `comments` tables by hand — one import and it's ready.
- If you ever *do* want to deploy this somewhere online instead of running
  it locally, the same `.env`-based setup works with any cloud MySQL
  provider too — just point `DB_HOST` etc. at the cloud database and set
  `DB_SSL=true`.
