const express = require('express');
const multer = require('multer');
const Papa = require('papaparse');
const XLSX = require('xlsx');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

// Use cors middleware to enable CORS for all routes
app.use(cors());

// Setup multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Variable to temporarily store the parsed data from the uploaded file
let latestData = null;

// POST request for file upload and processing
app.post('/upload', upload.single('file'), (req, res) => {
    if (req.file && req.file.buffer) {
        let data;
        
        // Check file extension to determine parsing method
        if (req.file.originalname.endsWith('.csv')) {
            const csvData = req.file.buffer.toString('utf8');
            data = Papa.parse(csvData, {
                header: true,
                skipEmptyLines: true
            }).data;
        } else if (req.file.originalname.endsWith('.xlsx')) {
            const workbook = XLSX.read(req.file.buffer, { type: 'buffer' });
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            data = XLSX.utils.sheet_to_json(worksheet);
        }
        
        latestData = data;
		res.json(data);
    } else {
        res.status(400).send('No file uploaded.');
    }
});

// GET request to serve the latest parsed data
app.get('/data', (req, res) => {
    if (latestData) {
        res.json(latestData);
    } else {
        res.status(204).send('No data available.');
    }
});

// GET request just to check if the server is running
app.get('/upload', (req, res) => {
    res.send('Upload endpoint ready for POST requests.');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
