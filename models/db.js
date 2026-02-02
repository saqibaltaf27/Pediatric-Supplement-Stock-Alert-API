const sqlite3 = require("sqlite3").verbose();
const path = require("path");

// Absolute path to database file
const dbPath = path.resolve("./data/database.sqlite");

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error("Failed to connect to database:", err.message);
  } else {
    console.log("Connected to SQLite database");
  }
});

// Enable foreign keys
db.run("PRAGMA foreign_keys = ON");

// Initialize the Tables
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS notifications (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product_id INTEGER NOT NULL,
      email TEXT NOT NULL,
      sent INTEGER DEFAULT 0,
      UNIQUE(product_id, email),
      FOREIGN KEY(product_id) REFERENCES Products(id)
    )
  `);
});

module.exports = db;
