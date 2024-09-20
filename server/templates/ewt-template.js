const { PDFDocument, rgb } = require('pdf-lib');

async function createEWTTemplate() {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([612, 936]); // 8.5 inches by 13 inches long bondpaper
//PAYEE INFORMATION
    //TIN
    // page.drawText('628 740 403 00000', {
    //   x: 208.64,
    //   y: 728, //137.94
    //   size: 8,
    //   color: rgb(0, 0, 0),
    // });
    //Payee's Name
    // page.drawText('Adobo Super Software Inc.', {
    //   x: 33.63,
    //   y: 772.48,
    //   size: 8,
    //   color: rgb(0, 0, 0),
    // });
    // //Registered Address
    // page.drawText('3RD FLOOR VICTORY PARK AND SHOP M. QUEZON COR. TOLDAN ST. SAN ISIORO (POS.) 1870 CITY OF ANTIPOLO RIZAL', {
    //   x: 33.63,
    //   y: 744.13,
    //   size: 8,
    //   color: rgb(0, 0, 0),
    // });
    // //Postal Code
    // // page.drawText('1870', {
    // //     x: 33.63,
    // //     y: 744.13,
    // //     size: 8,
    // //     color: rgb(0, 0, 0),
    // // });
    // //Foreign Address (if applicable)
    // page.drawText('3RD FLOOR VICTORY PARK AND SHOP M. QUEZON COR. TOLDAN ST. SAN ISIORO (POS.) 1870 CITY OF ANTIPOLO RIZAL', {
    //   x: 33.63,
    //   y: 714.93,
    //   size: 8,
    //   color: rgb(0, 0, 0),
    //   });

    // //PAYOR INFORMATION
    // //TIN
    // // page.drawText('628 740 403 00000', {
    // //     x: 208.64,
    // //     y: 683.53,
    // //     size: 8,
    // //     color: rgb(0, 0, 0),
    // // });
    // //Payors Name
    // page.drawText('Einer Mas Lim', {
    //     x: 33.63,
    //     y: 656.87,
    //     size: 8,
    //     color: rgb(0, 0, 0),
    // });
    // //Registered Address
    // page.drawText('1103-6533 Buswell St Richmond, British Columbia', {
    //     x: 33.63,
    //     y: 628.73,
    //     size: 8,
    //     color: rgb(0, 0, 0),
    // });
    // //Postal Code
    // // page.drawText('1870', {
    // //     x: 33.63,
    // //     y: 628.73,
    // //     size: 8,
    // //     color: rgb(0, 0, 0),
    // // });
    // //Income Payments Subject to Expanded Withholding Tax
    // page.drawText('Professional fees', {
    //     x: 20.42,
    //     y: 570.29,
    //     size: 8,
    //     color: rgb(0, 0, 0),
    // });
    // //1st month of the quarter
    // page.drawText('1000', {
    //     x: 220.98,
    //     y: 570.29,
    //     size: 8,
    //     color: rgb(0, 0, 0),
    // });
    // //2nd month of the quarter
    // page.drawText('1000', {
    //     x: 293.36,
    //     y: 570.29,
    //     size: 8,
    //     color: rgb(0, 0, 0),
    // });
    // //3rd month of the quarter
    // page.drawText('1000', {
    //     x: 366.52,
    //     y: 570.29,
    //     size: 8,
    //     color: rgb(0, 0, 0),
    // });
    // //total
    // page.drawText('1000', {
    //     x: 437.91,
    //     y: 570.29,
    //     size: 8,
    //     color: rgb(0, 0, 0),
    // });
    // //tax withheld for the quarter
    // page.drawText('1000', {
    //     x: 510.33,
    //     y: 570.29,
    //     size: 8,
    //     color: rgb(0, 0, 0),
    // });
    // //total (row)
    // page.drawText('1000', {
    //     x: 510.33,
    //     y: 433.44,
    //     size: 8,
    //     color: rgb(0, 0, 0),
    // });

      // Add the form title
  page.drawText('BIR Form No. 2307', {
    x: 50,
    y: 890,
    size: 16,
    color: rgb(0, 0, 0),
  });

  page.drawText('Certificate of Creditable Tax Withheld at Source', {
    x: 50,
    y: 870,
    size: 14,
    color: rgb(0, 0, 0),
  });

  // Add static text and labels
  page.drawText('For the Period', {
    x: 50,
    y: 850,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('(MM/DD/YYYY)', {
    x: 50,
    y: 830,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('From', {
    x: 50,
    y: 810,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('To', {
    x: 200,
    y: 810,
    size: 12,
    color: rgb(0, 0, 0),
  });

  // Draw lines for input fields
  page.drawLine({
    start: { x: 80, y: 810 },
    end: { x: 180, y: 810 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  page.drawLine({
    start: { x: 230, y: 810 },
    end: { x: 330, y: 810 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Add fields and labels for Payee Information
  page.drawText('Part I – Payee Information', {
    x: 50,
    y: 770,
    size: 14,
    color: rgb(0, 0, 0),
  });

  page.drawText('3 Payee’s Name (Last Name, First Name, Middle Name for Individual OR Registered Name for Non-Individual)', {
    x: 50,
    y: 750,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawLine({
    start: { x: 50, y: 740 },
    end: { x: 550, y: 740 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  page.drawText('4 Registered Address', {
    x: 50,
    y: 720,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawLine({
    start: { x: 50, y: 710 },
    end: { x: 550, y: 710 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  page.drawText('4A ZIP Code', {
    x: 50,
    y: 690,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawLine({
    start: { x: 150, y: 690 },
    end: { x: 250, y: 690 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Add more fields and labels as needed
  // ...

  // Part II – Payor Information
  page.drawText('Part II – Payor Information', {
    x: 50,
    y: 650,
    size: 14,
    color: rgb(0, 0, 0),
  });

  page.drawText('6 Taxpayer Identification Number (TIN)', {
    x: 50,
    y: 630,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawLine({
    start: { x: 50, y: 620 },
    end: { x: 250, y: 620 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  page.drawText('7 Payor’s Name (Last Name, First Name, Middle Name for Individual OR Registered Name for Non-Individual)', {
    x: 50,
    y: 600,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawLine({
    start: { x: 50, y: 590 },
    end: { x: 550, y: 590 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Add more fields and labels as needed
  // ...

  // Part III – Details of Monthly Income Payments and Taxes Withheld
  page.drawText('Part III – Details of Monthly Income Payments and Taxes Withheld', {
    x: 50,
    y: 550,
    size: 14,
    color: rgb(0, 0, 0),
  });

  // Add table headers and lines for the table
  page.drawText('Tax Withheld for the Quarter', {
    x: 50,
    y: 530,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('ATC', {
    x: 150,
    y: 530,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('Income Payments Subject to Expanded Withholding Tax', {
    x: 200,
    y: 530,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('Amount of Income Payments', {
    x: 400,
    y: 530,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('1st Month of the Quarter', {
    x: 50,
    y: 510,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('2nd Month of the Quarter', {
    x: 200,
    y: 510,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('3rd Month of the Quarter', {
    x: 350,
    y: 510,
    size: 12,
    color: rgb(0, 0, 0),
  });

  page.drawText('Total', {
    x: 500,
    y: 510,
    size: 12,
    color: rgb(0, 0, 0),
  });

  // Draw lines for the table
  page.drawLine({
    start: { x: 50, y: 500 },
    end: { x: 550, y: 500 },
    thickness: 1,
    color: rgb(0, 0, 0),
  });

  // Add more fields and labels as needed
  // ...

  // Save the modified PDF

    const pdfBytes = await pdfDoc.save()
    return pdfBytes
}

module.exports = { createEWTTemplate }
