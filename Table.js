//Cria tabelas
class Table {
    constructor(dadosProcessados) {
        //Primeiro elemento do array recebido guarda na header
        this.header = dadosProcessados[0];
        //Shift elimina o primeiro elemento do array (já guardado anteriormente)
        dadosProcessados.shift();
        //Restante dos dados do array fica em Rows
        this.rows = dadosProcessados;
    }


    //Get pode ser acessado como atributo
    get rowsCount() {
        //Retorna contagem de linhas
        return this.rows.length;
    }

    get columnCount() {
        return this.header.length;
    }
}


module.exports = Table;