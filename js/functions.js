let texto = document.getElementById('text');
let imagen = document.getElementById('imagen');
let resultado = document.getElementById('resultado');
let copiar = document.getElementById('copiar');

let  textFinal = '';

// funcion de encriptar mediante switch
function encriptar() {
    textFinal = '';
    let textoInicial = texto.value.toLowerCase()
    copiar.removeAttribute('hidden')
    
    if (textoInicial != '') {
        const arrayTexFinal = []

        for (let i = 0; i < textoInicial.length; i++) {
            const element = textoInicial[i];

            switch (element) {
                case 'a':
                    arrayTexFinal.push('ai')
                    break;
            
                case 'e':
                    arrayTexFinal.push('enter')
                    break;
            
                case 'i':
                    arrayTexFinal.push('imes')
                    break;
            
                case 'o':
                    arrayTexFinal.push('ober')
                    break;
            
                case 'u':
                    arrayTexFinal.push('ufat')
                    break;
            
                default:
                    arrayTexFinal.push(element)
                    break;
            }
        }

        
        arrayTexFinal.forEach(element => {
            textFinal = textFinal + element
        });

        imagen.classList.add("ocultarImagen")
        resultado.textContent = textFinal
        
    }    
    
}

// funcion desencriptar mediante metodos nativos de js
function desencriptar() {
    textFinal = '';
    let textoInicial = texto.value.toLowerCase();
    copiar.removeAttribute('hidden');

    let palabra = textoInicial.split(' ');

    palabra.forEach(element => {
        let palabra = element
        let palabrades = palabra.replace('ai','a').replace('enter','e').replace('imes','i').replace('ober','o').replace('ufat','u')
        for (let i = 0; i < 6; i++) {
            palabrades = palabrades.replace('ai','a').replace('enter','e').replace('imes','i').replace('ober','o').replace('ufat','u')
        }
        textFinal = textFinal + palabrades + " "
    });
    console.log(textFinal);
    
    imagen.classList.add("ocultarImagen")
    resultado.textContent = textFinal
    

}

//funcion flecha copiar
copiar.addEventListener('click', ()=>{
    navigator.clipboard.writeText(textFinal)
})
