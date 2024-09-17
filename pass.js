let inputSlider = document.getElementById("inputSlider");
let inputValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox")
let Lowercase = document.getElementById("Lowercase")
let uppercase = document.getElementById("uppercase")
let number = document.getElementById("number")
let symbols = document.getElementById("symbols")
let genBtn = document.getElementById("genBtn")
let image = document.getElementById("image")


//Showing input slider value.
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
})

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

let lowerChars = "abcdefghijklmnopqrstuvwxyz"
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumber = "0123456789";
let allSymbol = "~!@#$%^&*";

// Function to Genereate password.
function generatePassword(){
    let genPassword = "";
    let allChars = "";
    
  allChars += Lowercase.checked ? Lowercase : "";
  allChars += uppercase.checked ? uppercase : "";
  allChars += number.checked ? allNumber : "";
  allChars += symbols.checked ? allSymbol : "";


let i = 1;
while (i<=inputSlider.value){
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
}

    return genPassword;
}

image.addEventListener('click', () => {
    if(passBox.value != "" || passBox.value.length >=1) {
        navigator.clipboard.writeText(passBox.value)
        image.innerText = "check";
        image.title = "Password Copied";
    }
   
})