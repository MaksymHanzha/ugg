const validPass = "ПАРОЛЬ";

var validateButton = document.getElementById("validateButton");
var passwordInput = document.getElementById("password");

validateButton.addEventListener("click", function() {
  var enteredPassword = passwordInput.value;

  if (enteredPassword == validPass) {
    alert("ВІРНО");
  } else {
    alert("НЕ ТО");
  }
});