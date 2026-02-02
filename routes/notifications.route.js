const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationsController');

// Register notification
router.post('/register-notification', notificationsController.registerNotification);

//Get pending notifications for a product
router.get('/get-notifications/:product_id', notificationsController.getNotificationsByProduct);

// Mock trigger to send notifications
router.post('/trigger/:product_id', notificationsController.triggerNotifications);

module.exports = router;