const db = require('../models/db');
const validator = require('validator');

// Register a notification request.
exports.registerNotification = (req, res) => {
    const { product_id, email } = req.body;
    if (!product_id || !email) {
        return res.status(400).json({error: 'Product ID and Email are required..'});
    }

    if (!validator.isEmail(email)) {
        return res.status(400).json({error: 'Invalid Email Format'});
    }

    // Checking if the products exists.
    db.get('Select * from products where id = ?', [product_id], (err, product) => {
        if (err) return res.status(500).json({error: err.message});
        if (!product) return res.status(404).json({ error: 'Product Not Found..'});

        // Inserting Notification
        db.run('Insert Into notifications (product_id, email) Values (?, ?)',[product_id, email],
            function (err) {
                if (err) {
                    if (err.message.includes('UNIQUE')) {
                        return res.status(400).json({ error: 'Email already registered for this product'});
                    }
                    return res.status(500).json({ error: err.message});
                }
                res.status(201).json({ message: 'Notification registered Successfully', id: this.lastID});
            }
        );
    });
};

// Get All pending Notifications for a product.
exports.getNotificationsByProduct = (req, res) => {
    const { product_id } = req.params;
    db.all('Select id, email, sent From notifications Where product_id = ? and sent = 0', [product_id],
        (err, rows) => {
            if(err) return res.status(500).json({error: err.message});
            res.json(rows);
        }
    );
};

// Mock Trigger endpoint that sends notifications
exports.triggerNotifications = (req, res) => {
    const { product_id } = req.params;
    db.run(`Update notifications
        Set sent = 1
        Where product_id = ? And sent = 0`, [product_id],
    function (err) {
        if (err) return res.status(500).json({ error : err.message});
        res.json({ message: `Notifications for product ${product_id} marked as Sent.`, count: this.changes});
    });
};
