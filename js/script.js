function validateNom(){
    if(document.getElementById('nom').value == '' ) {
        document.getElementById('failNom').innerHTML = "Veuillez remplir la case nom !";
        document.getElementById('nom').style.boxShadow = '0px 0px 2px 2px #92262a';
        
        return false;
    }
    
    else if(document.getElementById('nom').value.length < 3 || document.getElementById('nom').value.length >= 25 ) {
        document.getElementById('failNom').innerHTML = "Veuillez mettre un nom entre 3 caractéres et 25 caractéres !";
        document.getElementById('nom').style.boxShadow = '0px 0px 2px 2px #92262a';
        return false;
    }

}


function validatePrenom(){
    if(document.getElementById('prenom').value == '' ) {
        document.getElementById('failPrenom').innerHTML = "Veuillez remplir la case prénom !";
        document.getElementById('prenom').style.boxShadow = '0px 0px 2px 2px #92262a';
        return false;
    }
    else if(document.getElementById('prenom').value.length < 3 || document.getElementById('prenom').value.length >= 25 ) {
        document.getElementById('failPrenom').innerHTML = "Veuillez renseigner un prénom entre 3 caractéres et 25 caractéres !";
        document.getElementById('prenom').style.boxShadow = '0px 0px 2px 2px #92262a';
        return false;
    }

}

function validateEmail(){

    if(document.getElementById('email').value == '' ) {
        document.getElementById('failEmail').innerHTML = "Veuillez remplir la case email !";
        document.getElementById('email').style.boxShadow = '0px 0px 2px 2px #92262a';
        return false;
    }
    else if ( !checkEmail( email ) ) {
        document.getElementById('failEmail').innerHTML = "Veuillez remplir cette case un email valide !";
        document.getElementById('email').style.boxShadow = '0px 0px 2px 2px #92262a';
        return false;
    }

}

function validateMessage(){
    if(document.getElementById('message').value == '' ) {
        document.getElementById('failMessage').innerHTML = "Veuillez remplir la case  message !";
        document.getElementById('message').style.boxShadow = '0px 0px 2px 2px #92262a';
        return false;
    }

}


function validateform(){
    
    
   if(
       document.getElementById('nom').value == '' &&
       document.getElementById('prenom').value == '' &&
       document.getElementById('mail').value == '' &&
       document.getElementById('message').value == ''
       ){
       
       document.getElementById('failNom').innerHTML = 'Veuillez remplir la case nom !';
       document.getElementById('failPrenom').innerHTML = 'Veuillez remplir la case prenom !'; document.getElementById('failMail').innerHTML = 'Veuillez remplir la case mail !';
       document.getElementById('failMessage').innerHTML = 'Veuillez remplir la case message !';
       return false;
        }    


}



