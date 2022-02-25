window.addEventListener('popstate', function (e) {
    var content = document.querySelector('.content');
    var content2= document.querySelector('.home');
    if (window.location.href.indexOf("#Home") != -1){
        content.style.display = 'none';
        content2.style.display = 'block';  
    } else {
        content.style.display = 'block';
        content2.style.display = 'none';  
    }    
});

if (window.location.href.indexOf("#Home") != -1){
    var content = document.querySelector('.content');
    var content2= document.querySelector('.home');
    content.style.display = 'none';
    content2.style.display = 'block';  
} else {
    var content = document.querySelector('.content');
    var content2= document.querySelector('.home');
    content.style.display = 'block';
    content2.style.display = 'none';  
}  
const form = document.querySelector('#form-login');
form.addEventListener('submit', GoPage);
    

function GoPage(e)
{
    
    
    if (CheckPassword()===true){

        window.history.pushState('page2', document.title, '?#Home');
        
       
    } else{
        
        e.preventDefault();
        return false;
    }
        
    

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
        }  
        // else {
        //     username_wrong.style.display = 'none';
        //     password_wrong.style.display = 'none';
        //     note.style.display = 'none';
        // }
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
        if(name.length>=6 && password.match(passw)){
            return true;
        }
}
}



function debounce(fn, delay, immediate) {
    let timeout;

    return function executedFn() {
        let context = this; // "this" context của executedFn
        let args = arguments; // "arguments" của fn

        let later = function() {
            timeout = null;
            if (!immediate) fn.apply(context, args);
        };

        let callNow = immediate && !timeout;

        clearTimeout(timeout);

        timeout = setTimeout(later, delay);

        if (callNow) fn.apply(context, args);
    }
}


const user_log = document.getElementById('name');

const keyUpHandler_user = event => {
    var username_wrong = document.querySelector('.wrong-name');
    var note = document.querySelector('.note');
    var name=document.querySelector('#name').value;  
        if (name.length<6){
            username_wrong.style.display = 'inline-block';
            note.style.display = 'inline-block';
            return false;  
        } else {
            username_wrong.style.display = 'none';   
            note.style.display = 'none';

        } 
};

const debouncedKeyUp = debounce(keyUpHandler_user, 500); 

user_log.addEventListener('keyup', debouncedKeyUp);

const pass_log = document.getElementById('pass');

const keyUpHandler_pass = event => {
    var password_wrong = document.querySelector('.wrong-pass');
    var note = document.querySelector('.note'); 
    var password=document.querySelector('#pass').value;
    var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/;

        if(!password.match(passw)) 
        { 
            password_wrong.style.display = 'inline-block';
            note.style.display = 'inline-block';
            return false;
            
        } else 
        {
            password_wrong.style.display = 'none';
            note.style.display = 'none';

        }
};

const debouncedKeyUp_pass = debounce(keyUpHandler_pass, 500); 

pass_log.addEventListener('keyup', debouncedKeyUp_pass);



