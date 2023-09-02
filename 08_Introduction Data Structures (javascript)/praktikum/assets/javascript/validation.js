let arrayData = [];
const table = document.querySelector(".table");

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
let selectedProductFreshness = "";

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
      console.log(inputProductFreshness[i].value);
      selectedProductFreshness = inputProductFreshness[i].value;
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

let inputProductDescription = document.getElementById("additionalDescription");

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
    validationProductPrice();
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
    // alert(
    //   "Data Disimpan \n" +
    //     "Product Name : " +
    //     inputProductName.value +
    //     "\n" +
    //     "Product Price : " +
    //     inputProductPrice.value +
    //     "\n" +
    //     "Product Freshness : " +
    //     selectedProductFreshness +
    //     "\n" +
    //     "Product Category : " +
    //     inputProductCategory.value +
    //     "\n" +
    //     "Deskripsi Produk : " +
    //     inputProductDescription.value +
    //     "\n"
    // );

    let object = {
      name: inputProductName.value,
      price: inputProductPrice.value,
      freshness: selectedProductFreshness,
      category: inputProductCategory.value,
      description: inputProductDescription.value,
    };
    arrayData.push(object);
    console.log(arrayData);

    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    checkData();

    inputProductName.value = "";
    inputProductPrice.value = 0;
    inputProductFreshnessStatus = false;
    selectedProductFreshness = "";
    for (let i = 0; i < inputProductFreshness.length; i++) {
      inputProductFreshness[i].checked = false;
    }
    inputProductCategory.value = "";
    inputProductImage.value = "";
    inputProductDescription.value = "";
  }
  checkButton();
}

function checkData() {
  arrayData.forEach((data, index) => {
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);
    const cell7 = row.insertCell(6);

    cell1.innerHTML = index + 1;
    cell2.innerHTML = data.name;
    cell3.innerHTML = data.category;
    cell4.innerHTML = "";
    cell5.innerHTML = data.freshness;
    cell6.innerHTML = "Rp. " + data.price;
    cell7.innerHTML = data.description;
  });
}

function deleteData() {
  arrayData.pop();
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
  checkData();
  console.log("tombol ditekan");
}

function searchData() {
  const keyword = document.getElementById("searchProduct").value;

  // Melakukan pencarian dengan menggunakan metode find
  const result = arrayData.find((product) => product.name === keyword);

  // Menampilkan hasil pencarian dalam alert jika ada hasil yang cocok
  if (result) {
    const message = `Nama Produk: ${result.name}\nHarga: Rp. ${result.price}\nKategori: ${result.category}\nProduct Freshness: ${result.freshness}\nDeskripsi: ${result.description}`;
    alert(message);
  } else if (keyword == "") {
    alert("Masukan Nama Produk dengan Benar");
  } else {
    alert("Tidak ada produk dengan nama yang persis sama.");
  }
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
