const express = require('express');
const cors = require('cors');
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

/*== Handle cross-origin request ==*/
const corsOptions = {
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "DELETE", "PATCH"],
    credentials: true
}
app.use(cors(corsOptions));

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
