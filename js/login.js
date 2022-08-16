alert('Name: admin,  password:12345')


function clickVerify(){
    nombreAdmin= document.querySelector('#nameLogin').value
    passwordAdmin=document.querySelector('#passwordLogin').value
    
    if((nombreAdmin=='admin') && (passwordAdmin=='12345')){
        window.location.href="./administratorPage.html"
    }else{
        let message=document.querySelector('#messageError')

        message.innerHTML='<span class="messageError">Revise los datos introducidos ❌</span>'
    }
}

