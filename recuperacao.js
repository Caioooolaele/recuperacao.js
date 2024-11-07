function funcao01(matriz){
    if(matriz.length != matriz[0].length){
        return "Matriz inválida";
    }
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j < matriz.length; j++){
            if(i == j){
                matriz[i][j] = 1;
            }else{
                matriz[i][j] = 0;
            }
        }
    }
    return matriz;
}
const arr = [[1, 2, 5],[3, 4, 7],[3, 4, 7]]

console.log (arr.length)
console.log (arr[0].length)
console.log (funcao01 (arr))


//professor, fiz até um teste, constando array dos arrays, ele vai fazendo um loop:for(let i = 0; i < matriz.length; i++){ aqui diz que o i é igual a 0
//                                                                                 : for(let j = 0; j < matriz.length; j++){ aqui diz que o j ta tendo um valor igual a 0
//                                                                                 : if(i == j){ aqui o i está recebendo o valor do j
//                                                                                 : matriz[i][j] = 1; aqui a matriz ta imprimindo os valores, tipo, cada loop que ele fazer é um valor,   0,1,2,,,etc
//                                                                                 :   }else{ o else é a condição..
//                                                                                 : matriz[i][j] = 0; mesma coisa do outro, ele vai estar fazendo um loop com cada numero e o que a matriz ira ter se vão ser 1,2,3,4,5 colchetes e 5 numeros, ele irá comparar com o valor que esta na matriz
//                                                                                 : return matriz; aqui ele vai indicar como um valor da função tem que retornar
//                                                                                 : O RESTO DE CONSOLE.LOG QUE ESTÁ ALI SÃO OS EXEMPLOS QUE MEU PAI EXPLICOU PRA MIM
//  const arr = [[1, 2, 5],[3, 4, 7],[3, 4, 7]] aqui esta representando os loops que a matriz teve