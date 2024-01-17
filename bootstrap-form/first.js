var getid = (id) =>{
    return document.getElementById(id);
}
var getclasses = (classes) =>{
    return document.getElementsByClassName(classes);
}


var firstname = getid('firstname'),
lastname = getid('lastname'),
email = getid('email'),
password = getid('password'),
form = getid('myform'),
button = getid('btn'),
sts = getid('sts'),
errmsg = getclasses('error');



form.addEventListener('submit',(event)=>{
    event.preventDefault();
    var fnameVaild = customvalidation(firstname,0,'First name is manditory..:)');
    var lnameValid = customvalidation(lastname,1,'Last name is manditory..:)');
    var emailValid = customvalidation(email,2,'Email is manditory..:)');
    var passwordValid = customvalidation(password,3,'Password is needed..:)');

    //console.log(fnameVaild+" "+lnameValid+" "+emailValid+" "+passwordValid);
    
    if(fnameVaild==true && lnameValid==true && emailValid==true && passwordValid==true){
        var finalObject = {};
        finalObject['firstname'] = firstname.value;
        finalObject['lastname'] = lastname.value;
        finalObject['email'] = email.value;
        finalObject['password'] = password.value;
        localStorage.setItem('userinfo',JSON.stringify(finalObject));
        sts.textContent="Submitting is in the process please wait..!"
        setTimeout(()=>{
            sts.textContent="Hurray !! you have sumbmitted successfully...:)"    
        },2000);
    }


})

function customvalidation(documentRef,classId,errorMsg){
    if(documentRef.value.trim()==''){
        documentRef.style.border='2px solid red';
        errmsg[classId].textContent = errorMsg;
        return false;
    }
    else{
        documentRef.style.border='2px solid green';
        errmsg[classId].textContent = '';
        return true;
    }
}

