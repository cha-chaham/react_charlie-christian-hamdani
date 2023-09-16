import React, { Component, useState, useEffect } from "react";
import "@/styles/App.css";

import Layout from "@/components/layout";
import {
  Input,
  Select,
  TextArea,
  File,
  Radio,
  Toggle,
} from "@/components/input";
import Button from "@/components/button";
import Table from "@/components/table";
import { ArticleTitle, ArticleDescription } from "@/components/article";

// Functional component biasa disebut sebagai stateless component
export default function CreateProduct1() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const [language, setLanguage] = useState("en");

  const [products, setProducts] = useState([]);

  const [errorProductName, setErrorProductName] = useState("");
  const [errorProductCategory, setErrorProductCategory] = useState("");
  const [errorProductPrice, setErrorProductPrice] = useState("");
  const [errorProductImage, setErrorProductImage] = useState("");
  const [errorProductFreshness, setErrorProductFreshness] = useState("");

  let isValid = false;

  function validateProductName(name) {
    if (name.length === 0) {
      setErrorProductName("Product Name tidak boleh kosong.");
      return false;
    } else if (name.length > 25) {
      setErrorProductName("Product Name tidak boleh melebihi 25 karakter.");
      return false;
    } else {
      setErrorProductName("");
      return true;
    }
  }

  function validateProductCategory(productCategory) {
    if (productCategory !== "Choose..." && productCategory != "") {
      setErrorProductCategory("");
      return true;
    } else {
      setErrorProductCategory("Pilih kategori produk.");
      return false;
    }
  }

  function validateProductPrice(productPrice) {
    if (productPrice > 0 && !isNaN(productPrice)) {
      setErrorProductPrice("");
      return true;
    } else {
      setErrorProductPrice("Harga produk harus lebih dari 0.");
      return false;
    }
  }

  function validateProductFreshness(productFreshness) {
    if (productFreshness != "") {
      setErrorProductFreshness("");
      return true;
    } else {
      setErrorProductFreshness("Pilih keadaan produk.");
      return false;
    }
  }
  function validateProductImage(productImage) {
    if (productImage != "") {
      setErrorProductImage("");
      return true;
    } else {
      setErrorProductImage("Pilih gambar produk.");
      return false;
    }
  }

  function handleProductNameChange(event) {
    const newName = event.target.value;
    setProductName(newName);
    validateProductName(newName);
  }

  function handleProductPriceChange(event) {
    const newPrice = event.target.valueAsNumber;
    setProductPrice(newPrice);
    validateProductPrice(newPrice);
  }

  function validateForm() {
    let isValid = true;

    if (!validateProductName(productName)) {
      isValid = false;
    }

    if (!validateProductCategory(productCategory)) {
      isValid = false;
    }

    if (!validateProductImage(productImage)) {
      isValid = false;
    }

    if (!validateProductFreshness(productFreshness)) {
      isValid = false;
    }

    if (!validateProductPrice(productPrice)) {
      isValid = false;
    }

    return isValid;
  }

  function randomGenerator() {
    console.log("Random Number : ", Math.floor(Math.random() * 101));
  }

  const toggleLanguage = () => {
    // Fungsi untuk mengganti bahasa
    setLanguage(language === "en" ? "id" : "en");
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
      const product = {
        id: products.length + 1,
        productName: productName,
        productCategory: productCategory,
        productPrice: productPrice,
        productDescription: productDescription,
        productImage: "Gambar Tersimpan",
        productFreshness: productFreshness,
      };
      const dupeProducts = [...products, product];
      setProducts(dupeProducts);

      setProductFreshness("");
      setProductImage("");
      setProductName("");
      setProductCategory("Choose...");
      setProductPrice(0);
      setProductDescription("");
    } else {
      alert("Input belum terisi semua");
      validateProductName(productName);
      validateProductCategory(productCategory);
      validateProductFreshness(productFreshness);
      validateProductImage(productImage);
      validateProductPrice(productPrice);
    }
  }

  return (
    <Layout>
      <div className="container px-5 mb-14 text-center flex flex-col align-center md:px-[3rem] lg:px-[9rem]">
        <p>
          Ganti Bahasa <Toggle onChange={toggleLanguage} />{" "}
        </p>

        <div className="h-[4rem] mb-4 flex justify-center md:mb-2 md:h-[4rem] lg:mb-4 lg:h-[4.5rem]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
            alt=""
            className="h-full"
          />
        </div>

        <ArticleTitle language={language} />
        <ArticleDescription language={language} />

        <Button label="Random Number" type="button" onClick={randomGenerator} />
      </div>
      <div className="container px-5 mb-8 md:px-[9rem] lg:px-[14rem]">
        <h2 className="font-bold text-base mb-1 md:text-xl md:mb-2 lg:mb-1">
          Detail Product
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            label="Product Name"
            type="text"
            value={productName}
            onChange={handleProductNameChange}
            errorMessage={errorProductName}
          />
          <Select
            label="Product Category"
            options={["Fruits", "Vegetable", "Dairy"]}
            value={productCategory}
            onChange={(event) => setProductCategory(event.target.value)}
            errorMessage={errorProductCategory}
          />
          <File
            label="Image Product"
            type="file"
            value={productImage}
            onChange={(event) => setProductImage(event.target.value)}
            errorMessage={errorProductImage}
          />
          <Radio
            header="Product Freshness"
            labels={["Brand new", "Second Hand", "Refurbished"]}
            onChange={(event) => setProductFreshness(event.target.value)}
            name="productFreshness"
            selectedValue={productFreshness}
            errorMessage={errorProductFreshness}
          />

          <TextArea
            label="Product Description"
            value={productDescription}
            onChange={(event) => setProductDescription(event.target.value)}
          />
          <Input
            label="Product Price"
            type="number"
            value={productPrice}
            onChange={handleProductPriceChange}
            errorMessage={errorProductPrice}
          />
          <div className="container w-full mt-12">
            <Button label="Submit" type="submit" />
          </div>
        </form>
      </div>
      <div className="container px-3 overflow-auto md:px-[4rem] lg:px-[8rem]">
        <h1 className="text-center font-bold text-3xl mb-2">List Products</h1>
        <Table
          headers={[
            "No",
            "Product Name",
            "Product Category",
            "Product Image",
            "Product Freshness",
            "Product Price",
            "Product Description",
          ]}
          datas={products}
        />
      </div>
    </Layout>
  );
}
