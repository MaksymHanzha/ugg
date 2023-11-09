var validateButton = document.getElementById("validateButton");
var passwordInput = document.getElementById("password");

validateButton.addEventListener("click", function() {
  var enteredPassword = passwordInput.value;

  if (enteredPassword == '6GL6GC6A') {
    window.location.href = "true.html";
  } else {
    alert("СПРОБА ВЗЛОМУ! ГРУПА ЗАЧИЩЕННЯ В ДОРОЗІ!");
  }
});