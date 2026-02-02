const db = require('../models/db');

const products = [
    'Gentle-Flow Probiotic',
    'Zinc-Shield Cream',
    'Soothing Bath Oil',
    'Vitamin D Drops',
    'Calm-EE Sleep AId'
];

db.serialize(() => {
    products.forEach((name) => {
        db.run('Insert Or Ignore Into Products (name) Values (?)', [name]);
    });
});

console.log('Database seeded wit products..');
db.close();