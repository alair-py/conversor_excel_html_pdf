const ejs = require("ejs");

class HtmlParser {
    static async Parse(table) {
        //Renderiza arquivo EJS de html e passa os dados para alimentar o "table.ejs" com forEach
        return await ejs.renderFile("./table.ejs", {
            header: table.header,
            rows: table.rows
        })
    }
}

module.exports = HtmlParser;