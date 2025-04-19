const express = require('express');
const { config } = require('dotenv');
const connectMongoDB = require('./db/mongo');

config();
const app = express();
const PORT = process.env.PORT || 3000;

/*== Connect to MongoDB */
connectMongoDB();

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
