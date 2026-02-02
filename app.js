const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const notificationsRoute = require('./routes/notifications.route');
const productsRoute = require('./routes/products.route');

const app = express();
const PORT = process.env.port || 1001;

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/notifications', notificationsRoute);
app.use('/api/products', productsRoute);

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error '});
});

app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
});