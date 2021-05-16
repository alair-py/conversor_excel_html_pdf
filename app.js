const Reader = require("./Reader");
const Processor = require("./Processor");
const Table = require("./Table");
const HtmlParser = require("./HtmlParser");
const Writer = require("./Writer");
const PDFwriter = require("./PDFwriter");

//Instacia objeto de Leitura
const leitor = new Reader();
const escritor = new Writer();


//Funcao assincrona que faz chamado do método de leitura e espera o retorno para então guardar numa variavel
async function main(filepath) {
    var dados = await leitor.Read(filepath); //Leitor do arquivo

    var dadosProcessados = Processor.Process(dados); //Prepara o arquivo separando em arrays

    var usuarios = new Table(dadosProcessados); //Separa e armazena os arrays em dois grupos, header e rows

    var html = await HtmlParser.Parse(usuarios); //Recebe os dados trabalhados em formato html (ejs)

    //Gera arquivo HTML baseado no arquivo Excel
    escritor.Write(Date.now() + ".html", html);
    //Gera arquivo PDF baseado no HTML gerado anteriormente
    PDFwriter.writePdf(Date.now() + ".pdf", html);
}

//Chamada principal passando caminho do arquivo para ser lido
main("./usuarios.CSV");