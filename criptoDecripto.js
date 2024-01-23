function cripto() {

    let saida = document.getElementById('saida');
    
    let textoDeEntrada = document.getElementById('entrada').value;
    let arrayDeLetras = textoDeEntrada.split(''); // cria um array com todas as arrayDeLetras do texto

    let contador = 0;
    let tamanhoDoArray = arrayDeLetras.length;


    while (contador < tamanhoDoArray) { // percorre letra por letra
        
        if (arrayDeLetras[contador] == 'a') {
            arrayDeLetras[contador] = 'ai';
        } 

        if (arrayDeLetras[contador] == 'e') {
            arrayDeLetras[contador] = 'enter';
        }

        if (arrayDeLetras[contador] == 'i') {
            arrayDeLetras[contador] = 'imes';
        }

        if (arrayDeLetras[contador] == 'o') {
            arrayDeLetras[contador] = 'ober';
        }

        if (arrayDeLetras[contador] == 'u') {
            arrayDeLetras[contador] = 'ufat';
        }

        contador++;
    } 
    saida.innerHTML = arrayDeLetras.join('');// aqui estará a saída CRIPTOGRAFADA
}




function decripto() {
    let saida = document.getElementById('saida'); // <p>
    let textoDeEntrada = document.getElementById('entrada').value; // <input>
    let arrayDeLetras = textoDeEntrada.split(''); // cria um array com todas as letras do texto
    let tamanhoDoArray = arrayDeLetras.length; // tamanho do array
    let contador = 0;
    console.log(tamanhoDoArray);

    while(contador < tamanhoDoArray) {

        // ai >> a
        if (arrayDeLetras[contador] == 'a') {
            contador++;

            if (arrayDeLetras[contador] == 'i') {
                arrayDeLetras[contador] = '';
                arrayDeLetras[contador-1] = 'a';
                console.log(arrayDeLetras[contador]);
            }
        contador-1;
        } 

        // enter >> e
        if (arrayDeLetras[contador] == 'e') { // 0
            contador++;

            if (arrayDeLetras[contador] == 'n') { // 1
                contador++;

                if (arrayDeLetras[contador] == 't') { // 2
                    contador++;

                    if (arrayDeLetras[contador] == 'e') { //3
                        contador++;

                        if (arrayDeLetras[contador] == 'r') { //4
                            arrayDeLetras[contador] = '';
                            arrayDeLetras[contador-1] = '';
                            arrayDeLetras[contador-2] = '';
                            arrayDeLetras[contador-3] = '';
                            arrayDeLetras[contador-4] = 'e';
                        }
                    }
                }
            }
        contador - 4;
        } 

        // imes >> i
        if (arrayDeLetras[contador] == 'i') { // 0
            contador++;

            if (arrayDeLetras[contador] == 'm') { // 1
                contador++;

                if (arrayDeLetras[contador] == 'e') { // 2
                    contador++;

                    if (arrayDeLetras[contador] == 's') { // 3
                            arrayDeLetras[contador] = '';
                            arrayDeLetras[contador - 1] = '';
                            arrayDeLetras[contador - 2] = '';
                            arrayDeLetras[contador - 3] = 'i';
                    }
                }
            }
        contador - 3;
        } 

        // ober >> o
        if (arrayDeLetras[contador] == 'o') { // 0
            contador++;

            if (arrayDeLetras[contador] == 'b') { // 1
                contador++;

                if (arrayDeLetras[contador] == 'e') { // 2
                    contador++;

                    if (arrayDeLetras[contador] == 'r') { // 3
                            arrayDeLetras[contador] = '';
                            arrayDeLetras[contador - 1] = '';
                            arrayDeLetras[contador - 2] = '';
                            arrayDeLetras[contador - 3] = 'o';
                    }
                }
            }
        contador - 3;
        } 


        // ufat >> u
        if (arrayDeLetras[contador] == 'u') { // 0
            contador++;

            if (arrayDeLetras[contador] == 'f') { // 1
                contador++;

                if (arrayDeLetras[contador] == 'a') { // 2
                    contador++;

                    if (arrayDeLetras[contador] == 't') { // 3
                            arrayDeLetras[contador] = '';
                            arrayDeLetras[contador - 1] = '';
                            arrayDeLetras[contador - 2] = '';
                            arrayDeLetras[contador - 3] = 'u';
                    }
                }
            }
        contador - 3;
        } 

    contador++;
    }

    saida.innerHTML = arrayDeLetras.join('');// aqui estará a saída CRIPTOGRAFADA
}