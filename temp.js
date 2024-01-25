let vogal_eCripto = 'enter'; // 4

function geraUmArray(seraGerado) {
    return seraGerado.split('');
}

let miniArray = geraUmArray(vogal_eCripto); // gera um mini-array
let tamanhoDoMiniArray = miniArray.length; // pega o tamanho desse mini-array = 4, neste caso
// let arrayDeLetras = ['e', 'n', 't', 'e', 'r'];

let contador = 0;
let passo = 0;




// while (tamanhoDoMiniArray > 0) {

    if (arrayDeLetras[contador] == miniArray[contador]) { // 0
        while(arrayDeLetras[contador] == miniArray[contador] && miniArray[contador] > 0) {

        }
        
        
        
        contador++;
        passo++;

    }

// }



if (arrayDeLetras[contador] == miniArray[contador]) { // 0
    console.log(contador);
    console.log(passo);
    console.log(arrayDeLetras[contador]);
    contador++;
    passo++;

    if (arrayDeLetras[contador] == 'n') { // 1
        console.log(contador);
        console.log(passo);
        console.log(arrayDeLetras[contador]);
        contador++;
        passo++;

        if (arrayDeLetras[contador] == 't') { // 2
            console.log(contador);
            console.log(passo);
            console.log(arrayDeLetras[contador]);
            contador++;
            passo++;

            if (arrayDeLetras[contador] == 'e') { //3
                console.log(contador);
                console.log(passo);
                console.log(arrayDeLetras[contador]);
                contador++;
                passo++;
                
                if (arrayDeLetras[contador] == 'r') { //4

                    arrayDeLetras[contador] = '';
                    arrayDeLetras[contador-passo] = 'e';

                    console.log(arrayDeLetras[contador]);

                    while (passo > 0) {
                        arrayDeLetras[contador-1] = '';
                        console.log(arrayDeLetras[contador-1]);
                        console.log(arrayDeLetras[contador]);
                        passo--;
                    }
                }
            }
        }
    }
contador - 4;
} 