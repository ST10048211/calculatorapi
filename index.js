const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Ensure CORS is imported

const app = express();
const port = 3000;

app.use(cors()); // Enable CORS globally
app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    if (num1 === undefined || num2 === undefined || !operation) {
        return res.status(400).json({ error: 'Invalid input' });
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid Operation';
    }

    res.json({ result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
