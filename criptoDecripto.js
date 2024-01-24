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



function entrada() {
    return document.getElementById('entrada').value;
}

function geraUmArray() {
    let entrou = entrada();
    return entrou.split('');
}



function cripto() {

    let arrayDeLetras = geraUmArray();
    let saida = document.getElementById('saida');
    let contador = 0;
    let tamanhoDoArray = arrayDeLetras.length;

    function criptografar(vogal, vogalCripto) {
        if (arrayDeLetras[contador] == vogal) {
            arrayDeLetras[contador] = vogalCripto;
        }
    }

    // let vogal_a = 'a';
    // let vogal_aCripto = 'ai';
    
    // let vogal_e = 'e';
    // let vogal_eCripto = 'enter';

    // let vogal_i = 'i';
    // let vogal_iCripto = 'imes';

    // let vogal_o = 'o';
    // let vogal_oCripto = 'ober';

    // let vogal_u = 'u';
    // let vogal_uCripto = 'ufat';

    while (contador < tamanhoDoArray) {
        
        criptografar(vogal_a, vogal_aCripto);
        criptografar(vogal_e, vogal_eCripto);
        criptografar(vogal_i, vogal_iCripto);
        criptografar(vogal_o, vogal_oCripto);
        criptografar(vogal_u, vogal_uCripto);
        contador++;
    } 
    saida.innerHTML = arrayDeLetras.join('');// aqui estará a saída CRIPTOGRAFADA
    // saida();
}




function decripto() {

    let arrayDeLetras = geraUmArray();

    let saida = document.getElementById('saida'); // <p>
    let tamanhoDoArray = arrayDeLetras.length; // tamanho do array

    let contador = 0;

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

    saida.innerHTML = arrayDeLetras.join('');// aqui estará a saída CRIPTOGRAFADA
}