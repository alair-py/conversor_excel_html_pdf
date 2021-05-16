const pdf = require("html-pdf");

class PDFwriter {
    static writePdf(filename, html) {
        pdf.create(html).toFile(filename, (error) => { });
    }

}



module.exports = PDFwriter;