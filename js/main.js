    function validarEntradaEmail(){
        alterarBotaoDesabilitado();
        alterarErroEmail();
      

}  
    function ValidarEntradaSenha(){
        alterarBotaoDesabilitado();
        alertaErroSenha();
        
    }



    function emailValido() {
        const email = document.getElementById('email').value; 
        if (!email) {
            return false;
        }
            return validateEmail(email);
}
   
    function alterarErroEmail(){
        const email = document.getElementById('email').value;
        if(!email) {
            document.getElementById("email-obrigatorio-erro")
            .style.display = "block";
        } else {
            document.getElementById("email-obrigatorio-erro")
            .style.display = "none";
        }

        if(validateEmail(email)){
            document.getElementById('email-invalido-erro')
            .style.display="none";
        } else {
            document.getElementById('email-invalido-erro')
            .style.display="block";
        }

    }

    function alertaErroSenha(){
        const senha = document.getElementById('senha').value;
        if(!senha){
            document.getElementById('senha-obrigatoria-erro')
            .style.display="block";
        } else {
            document.getElementById('senha-obrigatoria-erro')
            .style.display="none";
        }
    }

    function alterarBotaoDesabilitado(){
        const emailValidoConfirmado = emailValido(); 
        document.getElementById('reset-senha').disabled = 
        !emailValidoConfirmado;
        
        const senhaConfirmada = validarSenha();
        document.getElementById('btn').disabled = !emailValidoConfirmado ||
        !senhaConfirmada;
    }

    function validarSenha(){
      const senha = document.getElementById('senha').value;
      if (!senha){
        return false;
      }
      return true;
    }

 function validateEmail(email){
    return /\S+@\S+\.\S+/.test(email);
 }

 