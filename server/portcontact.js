// server.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3004; // Changed the port number to 3004

app.use(bodyParser.json());
app.use(cors());

let transportRegistry = [];

app.post('/register', (req, res) => {
    const { vehicleNumber, driverName, destination } = req.body;
    
    if (!vehicleNumber || !driverName || !destination) {
        return res.status(400).send("Missing parameters");
    }

    const newTransport = {
        id: transportRegistry.length + 1,
        vehicleNumber,
        driverName,
        destination
    };

    transportRegistry.push(newTransport);
    res.status(201).json(newTransport);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
