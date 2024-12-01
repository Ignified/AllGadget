function validateForm(event){
    var username = document.getElementById("username").value 
    var email = document.getElementById("email").value 
    var password = document.getElementById("password").value
    var phonenumber = document.getElementById("phonenumber").value
    var dob = new Date(document.getElementById("dob").value)
    var female = document.getElementById("female").checked
    var male = document.getElementById("male").checked
    var nationality = document.getElementById("nationality").value
    var checkbox = document.getElementById("checkbox").checked

    // biar tidak auto refresh
    event.preventDefault()

    if(username == ""){
        alert("Username cannot be empty")
    }

    else if(!email.endsWith("@binus.ac.id")){
        alert("Email used must ends with @binus.ac.id")
    }

    else if(!checkPassword(password)){
        alert("Password must be at least 8 characters and is alphanumeric")
    }

    else if(phonenumber.charAt(0) != 0){
        alert("Phone number must start with '0'")        
    }

    else if(dob.getFullYear() > 2023){
        alert(dob.getFullYear() + "is invalid")
    }

    else if(!female && !male){
        alert("Please choose a gender")
    }

    else if(nationality == "empty"){
        alert("nationality cannot be empty")
    }

    else if(!checkbox){
        alert("Please agree to our Terms and Conditions")
    }

    else{
        alert("Form submitted successfully")
    }
}

// buat cek validitas password (harus >= 8 karakter, ada karakter sama angka)
function checkPassword(password){
    if(password.length < 8){
        return false
    }

    // untuk cek ada karakter atau tidak
    isAlpha = false
    // untuk cek ada angka atau tidak
    isNum = false

    for(var i=0; i<password.length; i++){
        // NaN -> not a number
        // bakal return true kalau yang dicek bukan angka
        if(isNaN(password[i])){
            isAlpha = true
        }
        else{
            isNum = true
        }

        // isNum == true && isAlpha == true
        if(isNum && isAlpha){
            return true
        }
    }

    return false
}