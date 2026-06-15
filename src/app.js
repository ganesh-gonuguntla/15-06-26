const express = require('express');
const app = express();


app.use(express.json());

const userRoutes = require('./routes/users.routes');
const productRoutes = require('./routes/products.routes');
const orderRoutes = require('./routes/orders.routes');

app.use("/users",userRoutes);
app.use("/products",productRoutes);
app.use("/orders",orderRoutes);

module.exports = app;
