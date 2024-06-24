// Validação da senha
let senha = document.getElementById('senha');
let senhaC = document.getElementById('senhaC');
let senhaHelp = document.getElementById('senhaHelp')

function validarSenha(){
    if (senha.value != senhaC.value) {
        senhaC.setCustomValidity("Senhas diferentes!");
        senhaC.reportValidity();
        return false;
    } else {
        senhaC.setCustomValidity("");
        return true;
    }
}

function irParaParte2() {
    // Mostra a segunda parte do formulário e oculta a primeira parte
    document.getElementById('parte1').style.display = 'none';
    document.getElementById('parte2').style.display = 'block';
}

function voltarParaParte1() {
    // Mostra a primeira parte do formulário e oculta a segunda parte
    document.getElementById('parte2').style.display = 'none';
    document.getElementById('parte1').style.display = 'block';
}

// Event listener para validar a primeira parte do formulário antes de avançar
document.getElementById('formCadastro').addEventListener('submit', function(event) {
    var senha = document.getElementById('senha').value.trim();
    var senhaC = document.getElementById('senhaC').value.trim();

    if (senha.length < 6) {
        document.getElementById('erroSenha').textContent = 'Sua senha deve ter pelo menos 6 caracteres.';
        event.preventDefault();
        return false;
    } else {
        document.getElementById('erroSenha').textContent = '';
    }

    if (senha !== senhaC) {
        document.getElementById('erroSenhaC').textContent = 'As senhas digitadas não coincidem.';
        event.preventDefault();
        return false;
    } else {
        document.getElementById('erroSenhaC').textContent = '';
    }

    return true;
});

senhaC.addEventListener('input', validarSenha)