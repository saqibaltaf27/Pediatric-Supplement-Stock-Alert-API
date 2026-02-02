const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const db = new sqlite3.Database(path.join(__dirname, "../data/database.sqlite"));

// Initialize the Tables
db.serialize(() => {
    db.run(`Create Table If Not Exists Products(
        id Integer Primary Key AutoIncrement,
        name Text Not Null)`);

    db.run(`Create Table If Not Exists notifications(
        id Integer Primary Key AutoIncrement,
        product_id Integere Not Null,
        email Text Not Null,
        sent Integer Default 0,
        Unique(product_id, email),
        Foreign Key(product_id) References products(id)
        )`);
});

module.exports = db;