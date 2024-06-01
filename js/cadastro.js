document.getElementById('container').addEventListener('submit', function(e) {
   e.preventDefault();

    const nome = document.getElementById('nome-usuario').value
    const email = document.getElementById('email-usuario').value
    const senha = document.getElementById('senha-usuario').value
    const repetirSenha = document.getElementById
    ('repetir-senha-usuario').value 

    if (senha !== repetirSenha)
        alert('A senha não conferem!');
    return;


    const dadosUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    localStorage.setItem('dadosUsuario',JSON.stringify(dadosUsuario));
    alert('Dados salvos com sucesso!');

});

function acessarDados(){
    const dadosUsuario =            
     JSON.parse(localStorage.getItem('dadosUsuario'));
     
     if (dadosUsuario){
        console.log('Nome:', dadosUsuario.nome);
        console.log('Email:', dadosUsuario.email);
        console.log('Senha:', dadosUsuario.senha);
     } else {
        console.log('Nenhum dado encontrado.')

     }
    }
acessarDados();





