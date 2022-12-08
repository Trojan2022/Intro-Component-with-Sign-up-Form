const firstname=document.querySelector('.fi');
const lastname=document.querySelector('.l');
const email=document.querySelector('.e');
const password=document.querySelector('.p');
const err=document.querySelector('.err');
const form=document.getElementById('form');
var validEmail= "/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/";

form.addEventListener('submit', e => {
    e.preventDefault();

    var fname=firstname.value.trim();
    var lname=lastname.value.trim();
    var eaddress=email.value.trim();
    var pass=password.value.trim();

    if(fname===""){
        showerr(firstname, 'First Name cannot be empty');
        
    }
    else{
        showsucc(firstname);
    }

    if(lname===""){
        showerr(lastname, 'Last Name cannot be empty');
       
    }
    else{
        showsucc(lastname);
    }


    if(eaddress===""){
        showerr(email, 'Email cannot be empty');
       
    
    }
    else{
         if(email.value.match(validEmail)){
            showsucc(email);
            
        }
        else{
            showemailerr(email);
        }
    }


    if(pass===""){
        showerr(password, 'Password cannot be empty');
        
    }
    else{
        showsucc(password);
    }


})

function showerr(req, message){
    const formControl=req.parentElement;
    const span=formControl.querySelector('span');
    span.innerText=message;
    req.classList.add('error');
    span.classList.add('error-text');
    req.classList.remove('success');
   
}

function showsucc(req){
    
    req.classList.add('success');
     req.classList.remove('error');  
     req.classList.remove('error-text');
}

function showemailerr(req){
    req.value='example@email.com';
    showerr(email, 'Look like this not an email');
}


