class Processor {
    //Metodo Static (não precisa instanciar)
    static Process(data) {
        //Quebra os dados recebidos por parametro por cada linha
        var line = data.split("\r\n");
        var rows = [];

        //Em cada linha quebrada anteriormente divide os dados por ";"
        line.forEach(row => {
            var arr = row.split(";");
            //A cada divisao guarda num array final com push
            rows.push(arr);
        });

        return rows;
    }
}


module.exports = Processor;