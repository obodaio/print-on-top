const { PDFDocument, rgb } = require('pdf-lib');

async function createDeliverReceiptTemplate() {
    const pdfDoc = await PDFDocument.create();
    //612 = width 626 = length
    const page = pdfDoc.addPage([612, 626.4]);
    
    //Company Name
    page.drawText('Visaya Poultry Supply', {
      x: 90,
      y: 511,
      size: 14,
      color: rgb(0, 0, 0),
    });
    // Date
    page.drawText('05/21/2024', {
      x: 520,
      y: 511,
      size: 14,
      color: rgb(0, 0, 0),
    });
    //Address
    page.drawText('Abangan Sur, Marilao, Bulacan', {
      x: 90,
      y: 493,
      size: 14,
      color: rgb(0, 0, 0),
    });
    //TIN
    page.drawText('103-571-681', {
      x: 15,
      y: 478,
      size: 14,
      color: rgb(0, 0, 0),
    });
    //items
    page.drawText('20+1', {
      x: 7,
      y: 428,
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('Stallion 10ml', {
      x: 80,
      y: 428,
      size: 14,
      color: rgb(0, 0, 0),
    });
    const pdfBytes = await pdfDoc.save()
    return pdfBytes
}

module.exports = { createDeliverReceiptTemplate }
