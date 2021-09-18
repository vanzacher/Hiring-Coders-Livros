// Faz o import do arquivo database
const livros = require('./database');

// Pega o input da biblioteca readline
const readline = require('readline-sync');
const entradaInicial = readline.question('Deseja buscar um livro? S/N ');

// Condição true
if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponiveis:')
    console.log('Produtividade', '/História brasileira','/Américas','/Estilo de vida','/Tecnologia')

    const entradaCategoria = readline.question('Qual categoria voce deseja? ')
    // Array
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)

} else {
    // CallBack compara e ordena por número de páginas crescente
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log('Essas são todos os livros disponiveis:')
    console.table(livrosOrdenados)
}
