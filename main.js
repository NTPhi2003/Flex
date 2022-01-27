
function CheckPassword() 
{ 
    var username_wrong = document.querySelector('.wrong-name');
    var password_wrong = document.querySelector('.wrong-pass');
    var note = document.querySelector('.note');
    var name=document.querySelector('#name').value;  
    var password=document.querySelector('#pass').value;
    var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/;
        if(name.length<6 && !password.match(passw)){
            username_wrong.style.display = 'inline-block';
            password_wrong.style.display = 'inline-block';
            note.style.display = 'inline-block';
            return false;
        }  else {
            username_wrong.style.display = 'none';
            password_wrong.style.display = 'none';
        }
        if (name.length<6){
            username_wrong.style.display = 'inline-block';
            note.style.display = 'inline-block';
            return false;  
        } else username_wrong.style.display = 'none';
        if(!password.match(passw)) 
        { 
            password_wrong.style.display = 'inline-block';
            note.style.display = 'inline-block';
            return false;
            
        } else password_wrong.style.display = 'none';
      
}