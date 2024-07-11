// Função para criptografar o texto usando a cifra de César
function criptografar() {
    const texto = document.getElementById('inputText').value;
    const deslocamento = parseInt(document.getElementById('deslocamento').value);
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);

        // Verifica se é uma letra maiúscula
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode(((charCode - 65 + deslocamento) % 26) + 65);
        }
        // Verifica se é uma letra minúscula
        else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 + deslocamento) % 26) + 97);
        }
        // Caso contrário, apenas adiciona o caractere original
        else {
            resultado += texto.charAt(i);
        }
    }

    document.getElementById('outputText').value = resultado;
}

// Função para descriptografar o texto usando a cifra de César
function descriptografar() {
    const texto = document.getElementById('inputText').value;
    const deslocamento = parseInt(document.getElementById('deslocamento').value);
    let resultado = '';

    for (let i = 0; i < texto.length; i++) {
        const charCode = texto.charCodeAt(i);

        // Verifica se é uma letra maiúscula
        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode(((charCode - 65 - deslocamento + 26) % 26) + 65);
        }
        // Verifica se é uma letra minúscula
        else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode(((charCode - 97 - deslocamento + 26) % 26) + 97);
        }
        // Caso contrário, apenas adiciona o caractere original
        else {
            resultado += texto.charAt(i);
        }
    }

    document.getElementById('outputText').value = resultado;
}

// Função para limpar os campos de texto
function limpar() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

// Função para atualizar o valor de deslocamento exibido
function atualizarDeslocamento() {
    const deslocamento = document.getElementById('deslocamento').value;
    document.getElementById('valorDeslocamento').textContent = deslocamento;
}

// Inicializar o valor de deslocamento ao carregar a página
window.onload = atualizarDeslocamento;
