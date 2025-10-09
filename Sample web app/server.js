const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from 'public' folder

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received message from ${name} (${email}): ${message}`);
    res.json({ status: 'success' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});