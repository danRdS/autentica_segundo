let vetor = [1, 2, 3, 5, 4, 6];

console.log(vetor);
let soma = vetor.reduce((resultado, item) => resultado + item);
console.log(`Soma: ${vetor.join(' + ')} = ${soma}`);

let colecaoDeNumeros = [2, 4, 8, 3, 5, 7];

const maxNumb = (numeros) => {
    return numeros.reduce((maior_numero, atual_numero) => {
        if(atual_numero > maior_numero) {
            return atual_numero;
        }
        return maior_numero;
    });
}

let maiorNumero = maxNumb(colecaoDeNumeros);
console.log(`Números do vetor "colecaoDeNumeros": [ ${colecaoDeNumeros.join(', ')} ]`);
console.log(`Maior número: ${maiorNumero}`);

