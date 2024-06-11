
const passwordBox = document.getElementById("password")
const length = 12
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const uppercase = "ABCDESFGIJKLMNOPQRSTUVWXTZ"
const numbers = "0123456789"
const symbols = "!@#$%^&*()_+-=[]{}|;:,./<>"

const allchar = lowercase + uppercase + numbers + symbols;

function createpassword() {
   let password = ""
   password += lowercase[Math.floor(Math.random() * lowercase.length)];
   password += uppercase[Math.floor(Math.random() * uppercase.length)];
   password += numbers[Math.floor(Math.random() * numbers.length)];
   password += symbols[Math.floor(Math.random() * symbols.length)];

   while (length > password.length) {
      password += allchar[Math.floor(Math.random() * allchar.length)]
   }
   passwordBox.value = password
}

function copypass() {
   var passwordInput = document.getElementById("password");
   passwordInput.select();
   document.execCommand("copy");
   alert("Password copied to clipboard!");
}