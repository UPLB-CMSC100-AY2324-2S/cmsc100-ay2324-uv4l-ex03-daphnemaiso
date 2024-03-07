//function that checks the 3 conditions to validate a password
function validatePassword(password1, password2){
    //Condition 1: The two passwords match.
    if(password1 != password2){
        console.log("Warning: The passwords do not match.");
        return false;
    }

    //Condition 2: The password has at least 8 characters.
    if(password1.length < 8){
        console.log("Warning: The password must be at least 8 characters.")
        return false;
    }

    //Condition 3: The password has at least 1 number, 1 uppercase character, and 1 lowercase character.
    let uppercaseFlag = false;
    let lowercaseFlag = false;
    let numberFlag = false;
    var allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    for(let i = 0; i < password1.length; i++){
        if(allowedCharacters.indexOf(password1[i]) != -1){      //to disregard special characters
            if(parseInt(password1[i])){       //if the character is a number
                numberFlag = true;
            }
            else{       //if the character is a letter
                if(password1[i] == password1[i].toUpperCase()){
                    uppercaseFlag = true;
                }
                if(password1[i] == password1[i].toLowerCase()){
                    lowercaseFlag = true;
                }
            }
        }
    }

    if(!uppercaseFlag || !lowercaseFlag || !numberFlag){    //if one of the sub-conditions of condition 3 is false
        console.log("Warning: The password must have at least 1 number, 1 uppercase character, and 1 lowercase character.")
        return false;
    }

    return true;    //returns true if all conditions are met
}

//function that returns the reversed string of the password
function reversePassword(password){
    let reversedPassword = "";
    for(let i = (password.length - 1); i >= 0; i--){
        reversedPassword = reversedPassword.concat(password[i]);
    }

    return reversedPassword;
}

//function that stores the password to the object 'account'
function storePassword(username, password1, password2){
    const account = {
        username: username,
        new_password: password1
    }

    if(validatePassword(password1, password2)){     //if the 3 conditions are met
        account.new_password = reversePassword(password1);      //prints the reversed string of the password
    }

    console.log(account);
}

const password1 = "Password1";
const password2 = "Password1";
const username = "Sam";

storePassword(username, password1, password2);