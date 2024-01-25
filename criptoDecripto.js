let vogal_a = 'a';
let vogal_aCripto = 'ai';

let vogal_e = 'e';
let vogal_eCripto = 'enter';

let vogal_i = 'i';
let vogal_iCripto = 'imes';

let vogal_o = 'o';
let vogal_oCripto = 'ober';

let vogal_u = 'u';
let vogal_uCripto = 'ufat';

let contador = 0;


function entrada() {
    return document.getElementById('entrada').value;
}

function mostraDecripto() {
    document.getElementById('saida').innerHTML = decripto();
}

function mostraCripto() {
    document.getElementById('saida').innerHTML = cripto();
}

function geraUmArray(seraGerado) {
    return seraGerado.split('');
}

function criptografar(arrayCriptografado, vogal, vogalCripto) {
    if (arrayCriptografado[contador] == vogal) {
        arrayCriptografado[contador] = vogalCripto;
    }
}

function cripto() {
    let arrayDeLetras = geraUmArray(entrada());
    let tamanhoDoArray = arrayDeLetras.length;
    while (contador < tamanhoDoArray) {
        criptografar(arrayDeLetras, vogal_a, vogal_aCripto);
        criptografar(arrayDeLetras, vogal_e, vogal_eCripto);
        criptografar(arrayDeLetras, vogal_i, vogal_iCripto);
        criptografar(arrayDeLetras, vogal_o, vogal_oCripto);
        criptografar(arrayDeLetras, vogal_u, vogal_uCripto);
        contador++;
    }
    contador = 0;
    return arrayDeLetras.join('');
}




function decripto() {

    let arrayDeLetras = geraUmArray(entrada());
    let tamanhoDoArray = arrayDeLetras.length;

    while(contador < tamanhoDoArray) {

        // ai >> a
        if (arrayDeLetras[contador] == 'a') {
            contador++;

            if (arrayDeLetras[contador] == 'i') {
                arrayDeLetras[contador] = '';
                arrayDeLetras[contador-1] = 'a';
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

    return arrayDeLetras.join('');
}