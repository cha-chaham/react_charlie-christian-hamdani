let inputName = document.getElementById("name");
let inputEmail = document.getElementById("email");
let inputPhoneNumber = document.getElementById("phoneNumber");
let inputMessage = document.getElementById("message");
let errorMessageName = document.getElementById("errorMessageName");
let errorMessageEmail = document.getElementById("errorMessageEmail");
let errorMessagePhoneNumber = document.getElementById(
  "errorMessagePhoneNumber"
);

inputName.addEventListener("input", validationName);
inputEmail.addEventListener("input", validationEmail);
inputPhoneNumber.addEventListener("input", validationPhoneNumber);

function validationName() {
  inputValue = inputName.value;
  if (inputValue == "") {
    errorMessageName.textContent = "Masukkan Nama Dengan Benar";
    return false;
  } else {
    errorMessageName.textContent = "";
    return true;
  }
}

function validationEmail() {
  inputValue = inputEmail.value;
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputValue == "") {
    errorMessageEmail.textContent = "Masukkan Email Dengan Benar";
    return false;
  } else if (!inputValue.match(validRegex)) {
    errorMessageEmail.textContent = "Masukkan Email Dengan Benar";
    return false;
  } else {
    errorMessageEmail.textContent = "";
    return true;
  }
}

function validationPhoneNumber() {
  inputValue = inputPhoneNumber.value;
  var validRegex = /^0\d{1,12}$/;
  if (inputValue == 0) {
    errorMessagePhoneNumber.textContent = "Masukan Nomor Telepon Dengan Benar";
    return false;
  } else if (!inputValue.match(validRegex)) {
    errorMessagePhoneNumber.textContent =
      "Penulisan Nomor Telepon dimulai dengan 0";
    return false;
  } else {
    errorMessagePhoneNumber.textContent = "";
    return true;
  }
}

function submitData() {
  let valueName = inputName.value;
  let valueEmail = inputEmail.value;
  let valuePhoneNumber = inputPhoneNumber.value;
  let valueMessage = inputMessage.value;

  if (validationName() && validationEmail() && validationPhoneNumber()) {
    alert(
      "Nama : " +
        valueName +
        "\n" +
        "Email : " +
        valueEmail +
        "\n" +
        "Nomor Telepon : " +
        valuePhoneNumber +
        "\n" +
        "Pesan : " +
        valueMessage +
        "\n"
    );
  }
}
