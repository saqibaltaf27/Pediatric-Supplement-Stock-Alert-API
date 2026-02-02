const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const dbPath = path.resolve("./data/database.sqlite");
const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READONLY, (err) => {
  if (err) console.error("Failed to open DB:", err.message);
  else console.log("Connected to SQLite DB (read-only)");
});

module.exports = db;
