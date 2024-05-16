/*const btn = document.querySelector('#btn')
const haeder = document.querySelector('h1')

btn.addEventListener("click",function(e) {
e.preventDefault();

    const email = document.querySelector('#email').value;
    console.log(emailAtivo);
    const senha = document.querySelector('#senha').value;
    console.log(senha) 

    haeder.innerHTML = 'Bem Vindo!'


})

*/
function validaEntrada(){
    const emailValidoConfirmado = emailValido(); 
    document.getElementById('reset-senha').disabled = 
    !emailValidoConfirmado;
    
    const senhaConfirmada = validarSenha();
    document.getElementById('btn').disabled = !emailValidoConfirmado ||
    !senhaConfirmada;

}   

    function emailValido() {
        const email = document.getElementById('email').value; 
        if (!email) {
            return false;
        }
            return validateEmail(email);
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