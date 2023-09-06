let arrayData = [];
const table = document.querySelector(".table");

let inputProductName = document.getElementById("productName");
let messageProductName = document.getElementById("errorProductName");

inputProductName.addEventListener("input", validationProductName);
inputProductName.addEventListener("input", specialCharacterTest);

// Validasi Inputan Product Name
function validationProductName() {
  var inputValue = inputProductName.value;

  if (inputValue == "") {
    messageProductName.textContent = "Nama Produk Tidak Boleh Kosong";
    messageProductName.style.color = "red";
  } else if (inputValue.length >= 25) {
    messageProductName.textContent =
      "Nama Produk Tidak Dapat Lebih Dari 25 Karakter";
    messageProductName.style.color = "red";

    // Jika karakter lebih dari 25, Maka isi inputan akan akan dipotong dari awal hingga sampai maxLength dari inputan Product Name
    inputProductName.value = inputValue.substring(
      0,
      inputProductName.getAttribute("maxLength")
    );
  } else {
    messageProductName.textContent = "";
  }
  checkButton();
}

inputProductPrice.addEventListener("input", validationProductPrice);

// Validasi Inputan Product Price
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

// Melakukan Perulangan Untuk Mengecek Keadaan Tercentang Atau Tidak Radio Inputan
for (let i = 0; i < inputProductFreshness.length; i++) {
  inputProductFreshness[i].addEventListener(
    "change",
    validationProductFreshness
  );
}

// Validasi Inputan Product Freshness
function validationProductFreshness() {
  let isSelected = false;
  for (let i = 0; i < inputProductFreshness.length; i++) {
    if (inputProductFreshness[i].checked) {
      inputProductFreshnessStatus = true;
      isSelected = true;
      selectedProductFreshness = inputProductFreshness[i].value;
      break;
    }
  }
  if (!isSelected) {
    messageProductFreshness.textContent = "Pilih Salah Satu";
    messageProductFreshness.style.color = "Red";
  } else {
    messageProductFreshness.textContent = "";
  }
  checkButton();
}

let inputProductCategory = document.getElementById("productCategory");
let messageSelectMessage = document.getElementById("errorProductCategory");

inputProductCategory.addEventListener("change", validationProductCategory);

// Validasi Inputan Product Category
function validationProductCategory() {
  let selectedProductCategory = inputProductCategory.value;
  if (selectedProductCategory == "") {
    messageSelectMessage.textContent = "Silakan pilih kategori produk.";
    messageSelectMessage.style.color = "Red";
  } else {
    messageSelectMessage.textContent = "";
  }
  checkButton();
}

let inputProductImage = document.getElementById("imageOfProduct");
let messageProductImage = document.getElementById("errorProductImage");

inputProductImage.addEventListener("change", validationProductImage);

// Validasi Inputan Product Image
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

// Menyimpan Data Ketika Tombol Submit Ditekan
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
    let object = {
      name: inputProductName.value,
      price: inputProductPrice.value,
      freshness: selectedProductFreshness,
      category: inputProductCategory.value,
      description: inputProductDescription.value,
    };
    arrayData.push(object);

    // Menghapus Data Yang Sudah Ada Pada Table
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
    updateData();

    inputProductName.value = "";
    inputProductPrice.value = "";
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

function updateData() {
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
  updateData();
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

// Untuk mengecek adanya special character yang ada pada inputan product name
function specialCharacterTest() {
  var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var inputValue = inputProductName.value;

  if (specialCharacters.test(inputValue)) {
    alert("Nama Produk Hanya Dapat Mengandung Huruf dan Angka");
    inputProductName.value = inputValue.replace(specialCharacters, "");
  }
}

let heroButton = document.getElementById("heroButton");

// Untuk Melakukan Validasi Tombol Akan Disabled atau Aktif
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
  }
}
