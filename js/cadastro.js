document.getElementById('containerFrom').addEventListener('submit', function(e) {
   e.preventDefault();

    const nome = document.getElementById('nome-usuario').value;
    const email = document.getElementById('email-usuario').value;
    const senha = document.getElementById('senha-usuario').value;
    const repetirSenha = document.getElementById
    ('repetir-senha-usuario').value; 

    if (senha !== repetirSenha){
        alert('As senhas não conferem!');
    return;
    }

    const dadosUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };
    try {
        const dadosString = JSON.stringify( dadosUsuario);
         localStorage.setItem('dadosUsuario', dadosString);
         alert('Dados salvos com sucesso!')
         console.log('Dados salvos:', dadosString);
    } catch (error) {
        console.error('Erro ao salvar os dados:', error);
    }
});

function acessarDados(){
    try {
        const dadosString = localStorage.getItem('dadosUsuario');   
        console.log('Dados recuperados:', dadosString)
        const dadosUsuario = JSON.parse(dadosString)         
 
     
     if (dadosUsuario){
        console.log('Nome:', dadosUsuario.nome);
        console.log('Email:', dadosUsuario.email);
        console.log('Senha:', dadosUsuario.senha);
     } else {
        console.log('Nenhum dado encontrado.')
     }
     } catch (error) {
        console.erro('Erro ao acessr os dados.')
    }
}