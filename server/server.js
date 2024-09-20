const express = require('express');
const { PDFDocument, rgb } = require('pdf-lib');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5001;
const { createSalesInvoiceTemplate } = require('./templates/si-template');
const { createDeliverReceiptTemplate } = require('./templates/dr-template');
const { createEWTTemplate } = require('./templates/ewt-template');

app.use(cors());

app.get('/download-si', async (req, res) => {
  try {
    const pdfBytes = await createSalesInvoiceTemplate(); // Call the function
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=si.pdf');
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    res.status(500).send('error generating pdf');
  }
});

app.get('/download-dr', async (req, res) => {
  try {
    const pdfBytes = await createDeliverReceiptTemplate(); // Call the function
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=dr.pdf');
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    res.status(500).send('error generating pdf');
  }
});

app.get('/download-ewt', async (req, res) => {
  try {
    const pdfBytes = await createEWTTemplate(); // Call the function
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=ewt.pdf');
    res.send(Buffer.from(pdfBytes));
  } catch (error) {
    res.status(500).send('error generating pdf');
  }
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// The "catchall" handler: for any request that doesn't match known routes, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
