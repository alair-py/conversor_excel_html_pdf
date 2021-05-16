const fs = require("fs"); //manipulador de arquivos
const util = require("util"); //usar promisify


//Classe de leitura
class Reader {
    //construtor transformando "readFile" (callback), em Promise (para usar Async Await)
    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    //Funcao assincrona de leitura
    async Read(filepath) {
        try {
            //Espera leitura do arquivo pelo "readFile transformado" e então retorna...
            return await this.reader(filepath, { encoding: "utf-8" });
        }
        catch (error) {
            console.log("Houve um erro na leitura!");
            return undefined;
        }
    }
}

//Exporta para usar no arquivo principal
module.exports = Reader;
