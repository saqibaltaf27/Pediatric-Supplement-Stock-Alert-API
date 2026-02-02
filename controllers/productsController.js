const db = require("../models/db");

exports.getAllProducts = (req, res) => {
    db.all('Select * From Products', [], (err, rows) => {
        if (err) return res.status(500).json({
            error: err.message });
        res.json(rows);
    });
};