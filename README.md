# Portfolio

Open `index.html` in a browser (or serve the folder with any static server) to view the portfolio. All project links work directly from there — no manual setup needed to browse them.

## Structure

```
index.html                     Main portfolio page
assets/                        Shared css / js / images used by index.html
projects/
  google-meet-clone/           Static HTML/CSS clone — open index.html directly
  netflix-clone/                Static HTML/CSS clone — open index.html directly
  apple-clone/
    build/                     Pre-built static site — open build/index.html directly, no server needed
    source/                    Full React source, for development (npm start)
  psychology-videos-api/
    build/                     Pre-built static site — open build/index.html directly, no server needed
    source/                    Full React source, for development (npm start)
  blog-crud/                   Node/Express + MySQL app — needs a database, see SETUP.md
```

## Notes on each project

- **Google Meet clone** and **Netflix clone** are plain static HTML/CSS/JS — just open their `index.html`.
- **Apple clone** and **Computer Science Videos page** (`psychology-videos-api/` — folder name kept as-is, content is now CS videos) used to be two separate React dev servers that both defaulted to port 3000, which caused conflicts and required manually running `npm start`. They're now pre-built into static files in `build/`, so the portfolio links straight to them with no server and no port conflicts. If you want to keep developing either one, `cd` into its `source/` folder, `npm install`, then `npm start` as usual.
- **Blog CRUD app** now reads its database connection from a `.env` file and creates its tables from `db/schema.sql`, instead of requiring anyone to manually set up a database by hand. Follow `projects/blog-crud/SETUP.md` to set it up locally with XAMPP (or any MySQL server) and start the server with `npm start`.
