// limpando  o código Main.js usando operadores ternarios.
 

function validarEntradaEmail(){
    alterarBotaoDesabilitado();
    alterarErroEmail();
  

}  
function ValidarEntradaSenha(){
    alterarBotaoDesabilitado();
    alertaErroSenha();
    
}



function emailValido() {
    const email = form.email().value; 
    if (!email) {
        return false;
    }
        return validateEmail(email);
}

function alterarErroEmail(){
    const email = form.email().value;
    form.senhaObrigatoriaErro().style.display = email ? "none":"block"; // operador ternario    
    form.emailInvalidoErro().style.display = validateEmail(email) ? "none" : "block"; // operador ternario

}

function alertaErroSenha(){
    const senha = form.senha().value;
    form.senhaObrigatoriaErro().style.display = senha ? "none" : "block"; // operador ternario

}

function alterarBotaoDesabilitado(){
    const emailValidoConfirmado = emailValido(); 
    form.resetSenha().disabled = !emailValidoConfirmado;
    
    const senhaConfirmada = validarSenha();
    form.bnt().disabled = !emailValidoConfirmado ||
    !senhaConfirmada;
}

function validarSenha(){
  const senha = form.senha().value;
  if (!senha){
    return false;
  }
  return true;
}

function validateEmail(email){
return /\S+@\S+\.\S+/.test(email);
}

const form = {
email: () => document.getElementById('email'),
senha:() => document.getElementById('senha'),
emailObrigatorioErro:() => document.getElementById('email-obrigatorio-erro'),
emailInvalidoErro: () => document.getElementById('email-invalido-erro'),
senhaObrigatoriaErro:() => document.getElementById('senha-obrigatoria-erro'),
resetSenha:() => document.getElementById('reset-senha'),
bnt:() => document.getElementById('bnt'),



}