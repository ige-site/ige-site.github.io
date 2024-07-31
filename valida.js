const usuarios = [
    {
        login: 'Maciel',
        pass: 'Macieladmin'
    },
    {
        login: 'Ruan',
        pass: 'Ruan123'
    },
    {
        login: 'admin',
        pass: 'admin'
    },
    {
        login: 'Manuela',
        pass: 'Manuela123'
    },
    {
        login: 'Alan',
        pass: 'Alan123'
    }
]

let botao = document.getElementById('btnLogar');

botao.addEventListener('click', function logar(){

    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin = false

    for(let i in usuarios){

        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass){
            validaLogin = true
            break
        }
    }

    if(validaLogin == true){
        location.href = 'index2.html'
    }else{
        alert('Usuário ou senha incorreta!')
    }

})

