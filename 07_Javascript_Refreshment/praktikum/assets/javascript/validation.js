let inputProductName = document.getElementById("productName");
let messageProductName = document.getElementById("errorProductName");

inputProductName.addEventListener("input", validationProductName);
inputProductName.addEventListener("input", specialCharacterTest);

function validationProductName() {
  var inputValue = inputProductName.value;

  if (inputValue == "") {
    messageProductName.textContent = "Nama Produk Tidak Boleh Kosong";
    messageProductName.style.color = "red";
  } else if (inputValue.length >= 25) {
    messageProductName.textContent =
      "Nama Produk Tidak Dapat Lebih Dari 25 Karakter";
    messageProductName.style.color = "red";
    console.log("Input sudah Lebih Dari 25");

    inputProductName.value = inputValue.substring(
      0,
      inputProductName.getAttribute("maxLength")
    );
    console.log(inputValue);
  } else {
    messageProductName.textContent = "";
  }
  checkButton();
}

let inputProductPrice = document.getElementById("productPrice");
let messageProductPrice = document.getElementById("errorProductPrice");

inputProductPrice.addEventListener("input", validationProductPrice);

function validationProductPrice() {
  var inputValue = inputProductPrice.value;

  if (inputValue == "") {
    messageProductPrice.textContent = "Harga Produk Tidak Boleh Kosong";
    messageProductPrice.style.color = "red";
  } else if (inputProductName.value == "") {
    validationProductName();
  } else if (inputProductCategory.value == "") {
    validationProductCategory();
  } else if (inputProductImage.value == "") {
    validationProductImage();
  } else if (inputProductFreshnessStatus == false) {
    validationProductFreshness();
  } else if (inputProductPrice.value == 0) {
    validationProductPrice();
  } else {
    messageProductPrice.textContent = "";
  }
  checkButton();
}

let eventButtonSimpan = document.getElementById("buttonSimpan");

eventButtonSimpan.addEventListener("click", simpanData);
eventButtonSimpan.disabled = true;

let inputProductFreshness = document.getElementsByName("productFreshness");
let messageProductFreshness = document.getElementById("errorProductFreshness");
let inputProductFreshnessStatus = false;

console.log(inputProductFreshnessStatus);

for (let i = 0; i < inputProductFreshness.length; i++) {
  inputProductFreshness[i].addEventListener(
    "change",
    validationProductFreshness
  );
}

function validationProductFreshness() {
  for (let i = 0; i < inputProductFreshness.length; i++) {
    if (inputProductFreshness[i].checked) {
      inputProductFreshnessStatus = true;
      messageProductFreshness.textContent = "";
      break;
    } else {
      messageProductFreshness.textContent = "Pilih Salah Satu";
      messageProductFreshness.style.color = "Red";
    }
  }
  checkButton();
  console.log(inputProductFreshnessStatus);
}

let inputProductCategory = document.getElementById("productCategory");
let errorSelectMessage = document.getElementById("errorProductCategory");

inputProductCategory.addEventListener("change", validationProductCategory);

function validationProductCategory() {
  let selectedProductCategory = inputProductCategory.value;
  if (selectedProductCategory == "") {
    errorSelectMessage.textContent = "Silakan pilih kategori produk.";
    errorSelectMessage.style.color = "Red";
  } else {
    errorSelectMessage.textContent = "";
  }
  checkButton();
}

let inputProductImage = document.getElementById("imageOfProduct");
let messageProductImage = document.getElementById("errorProductImage");

inputProductImage.addEventListener("change", validationProductImage);

function validationProductImage() {
  var uploadedImage = inputProductImage.value;

  if (uploadedImage == "") {
    messageProductImage.textContent = "Pilih Sebuah Gambar";
    messageProductImage.style.color = "Red";
  } else {
    messageProductImage.textContent = "";
  }
  checkButton();
}

function simpanData() {
  if (
    inputProductName.value == "" &&
    inputProductPrice.value == 0 &&
    inputProductFreshnessStatus == false &&
    inputProductCategory.value == "" &&
    inputProductImage.value == ""
  ) {
    alert("Mohon Periksa Kembali Inputan Anda");
    validationProductName();
    validationProductPrice();
    validationProductFreshness();
    validationProductCategory();
    validationProductImage();
  } else if (inputProductName.value == "") {
    alert("Mohon Masukkan Nama Produk Dengan Benar");
    validationProductName();
  } else if (inputProductCategory.value == "") {
    alert("Mohon Pilih Product Category Dengan Benar");
    validationProductCategory();
  } else if (inputProductImage.value == "") {
    alert("Mohon Pilih Sebuah Gambar");
    validationProductImage();
  } else if (inputProductFreshnessStatus == false) {
    alert("Mohon Pilih Salah Satu Product Freshness");
    validationProductFreshness();
  } else if (inputProductPrice.value == 0) {
    alert("Mohon Masukkan Harga Produk Dengan Benar");
    validationProductPrice();
  } else {
    alert("Data Disimpan");
  }
  checkButton();
}

function specialCharacterTest() {
  var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var inputValue = inputProductName.value;

  if (specialCharacters.test(inputValue)) {
    alert("Nama Produk Hanya Dapat Mengandung Huruf dan Angka");
    inputProductName.value = inputValue.replace(specialCharacters, "");
  }
}

let heroButton = document.getElementById("heroButton");

checkButton();
function checkButton() {
  if (
    inputProductName.value != "" &&
    inputProductPrice.value != 0 &&
    inputProductFreshnessStatus != false &&
    inputProductCategory.value != "" &&
    inputProductImage.value != ""
  ) {
    eventButtonSimpan.disabled = false;
    heroButton.classList.add("btn-primary");
    heroButton.classList.add("text-white");
    heroButton.classList.remove("btn-light");
    eventButtonSimpan.classList.remove("btn-light");
    eventButtonSimpan.classList.add("btn-primary");
    console.log("Button Sudah Dapat Digunakan");
  } else if (inputProductName.value == "") {
    eventButtonSimpan.disabled = true;
    heroButton.classList.remove("btn-primary");
    eventButtonSimpan.classList.remove("btn-primary");
    heroButton.classList.add("btn-light");
  } else if (inputProductCategory.value == "") {
    eventButtonSimpan.disabled = true;
    eventButtonSimpan.classList.remove("btn-primary");
    heroButton.classList.remove("btn-primary");
    heroButton.classList.add("btn-light");
  } else if (inputProductImage.value == "") {
    eventButtonSimpan.disabled = true;
    heroButton.classList.remove("btn-primary");
    eventButtonSimpan.classList.remove("btn-primary");
    heroButton.classList.add("btn-light");
  } else if (inputProductFreshnessStatus == false) {
    eventButtonSimpan.disabled = true;
    heroButton.classList.remove("btn-primary");
    eventButtonSimpan.classList.remove("btn-primary");
    heroButton.classList.add("btn-light");
  } else if (inputProductPrice.value == 0) {
    eventButtonSimpan.disabled = true;
    heroButton.classList.remove("btn-primary");
    eventButtonSimpan.classList.remove("btn-primary");
    heroButton.classList.add("btn-light");
  } else {
    console.log("Button Belum Berfungsi");
  }
}
