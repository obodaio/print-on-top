const { PDFDocument, rgb } = require('pdf-lib');

async function createSalesInvoiceTemplate() {
    const pdfDoc = await PDFDocument.create();
    //612 = width 626 = length
    //converstion: 1cm = 28.35cm just round off to nearest whole number
    const page = pdfDoc.addPage([612, 626.4]);
    
    //Company Name
    page.drawText('Visaya Poultry Supply', {
      x: 52, //old 80
      y: 505, //old 513
      size: 14,
      color: rgb(0, 0, 0),
    });
    // Date
    page.drawText('05/21/2024', {
      x: 441, //old 520
      y: 505, //old 513
      size: 14,
      color: rgb(0, 0, 0),
    });
    //Address
    page.drawText('Abangan Sur, Marilao, Bulacan', {
      x: 52, //old 80
      y: 485, //old 496
      size: 14,
      color: rgb(0, 0, 0),
    });
    //TIN
    page.drawText('103-571-681', {
      x: 15,
      y: 466, //old 478
      size: 14,
      color: rgb(0, 0, 0),
    });
    //items
    page.drawText('20+1', {
      x: 7,
      y: 397, //old 428
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('Stallion 10ml', {
      x: 80,
      y: 397,
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('180.83', {
      x: 397, //old 425
      y: 397,
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('3,616.60', {
      x: 497, //old 525
      y: 397,
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('20+1', {
      x: 7,
      y: 379, //old 410
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('Stallion 15ml', {
      x: 80,
      y: 379, //old 410
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('180.83', {
      x: 397, //old 425
      y: 379, //old 410
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('3,616.60', {
      x: 497, //old 525
      y: 379, //old 410
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('20+1', {
      x: 7,
      y: 361, //old 392
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('Stallion 30ml', {
      x: 80,
      y: 361, //old 392
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('180.83', {
      x: 397, //old 425
      y: 361, //old 392
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('3,616.60', {
      x: 497, //old 525
      y: 361, //old 392
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('20+1', {
      x: 7,
      y: 343, //old 374
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('Stallion 60ml', {
      x: 80,
      y: 343, //old 374
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('180.83', {
      x: 397, //old 425
      y: 343, //old 374
      size: 14,
      color: rgb(0, 0, 0),
    });
    page.drawText('3,616.60', {
      x: 497, //old 525
      y: 343, //old 374
      size: 14,
      color: rgb(0, 0, 0),
    });
    //amount net of vat
    page.drawText('3,229.11', {
      x: 497, //old 525
      y: 141, //155
      size: 14,
      color: rgb(0, 0, 0),
    });
    // add VAT
    page.drawText('387.49', {
      x: 497, //old 525
      y: 86, //old 100
      size: 14,
      color: rgb(0, 0, 0),
    });
    //total amount due
    page.drawText('3616.60', {
      x: 497, //old 525
      y: 66, //old 80
      size: 14,
      color: rgb(0, 0, 0),
    });
    
    const pdfBytes = await pdfDoc.save()
    return pdfBytes
}

module.exports = {createSalesInvoiceTemplate}


