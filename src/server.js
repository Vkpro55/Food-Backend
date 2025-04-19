const express = require('express');
const { config } = require('dotenv');
const connectMongoDB = require('./db/mongo');

const apiRoutes = require('./routes');

config();
const app = express();
const PORT = process.env.PORT || 3000;

/*== Connect to MongoDB */
connectMongoDB();

/*== Serve static files ==*/
app.use('/uploads', express.static('public/uploads'));

/*== Parse incomong resquest */
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
