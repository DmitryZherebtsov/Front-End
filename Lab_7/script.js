
// funkcja sprawdzająca czy pole posiada wartość
function myFunction() {
    let x = document.getElementById("user_name").value;
    let text;
    if (x == "") {
      text = "Pole NIE posiada wartości! Click To Hide";
      document.getElementById("demo").innerHTML = text;
    } else {
        text = ""; // Input OK
    }
}

function check(){
    text = ''
    document.getElementById("demo").innerHTML = text;
}

// funkcja sprawdzająca długość znaków

function checkLength(input) {
    var length = input.value.length;
    return length;
}

// funkcja sprawdzająca poprawność adresu email

function validEmail(email){
    var emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailCheck.test(email);
}
function checkEmailValidity() {
    var emailInput = document.getElementById("email_input");
    if (!validEmail(emailInput.value)) {
      alert("Podaj poprawny email");
    }
}

// funkcja sprawdzająca trudność hasła

function checkPasswordStrength(password) {
    var strength = 0;
    var passwordLength = password.length;
    var containsUppercase = /[A-Z]/.test(password);
    var containsLowercase = /[a-z]/.test(password);
    var containsNumbers = /\d/.test(password);
    var containsSymbols = /[$@!%*?&]/.test(password);
  
    if (passwordLength >= 8) {
      strength += 1;
    }
    if (containsUppercase) {
      strength += 1;
    }
    if (containsLowercase) {
      strength += 1;
    }
    if (containsNumbers) {
      strength += 1;
    }
    if (containsSymbols) {
      strength += 1;
    }
    if (strength <= 2) {
      return "Słabe";
    } else if (strength <= 4) {
      return "Średnie";
    } else {
      return "Silne";
    }
}

function checkPassword() {
    var passwordInput = document.getElementById("password_input");
    var passwordStrength = document.getElementById("password_strength");
  
    var password = passwordInput.value;
    var strength = checkPasswordStrength(password);
  
    passwordStrength.innerHTML = "Twoje hasło jest: " + strength;
  }

  