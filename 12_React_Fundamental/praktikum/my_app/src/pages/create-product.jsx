import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

import Layout from "../components/layout";
import { Input, Select, TextArea, File, Radio } from "../components/input";
import Button from "../components/button";
import Table from "../components/table";

// Functional component biasa disebut sebagai stateless component
export default function CreateProduct1() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [products, setProducts] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (
      productName.length > 0 &&
      productPrice != 0 &&
      productCategory !== "Choose..." &&
      productCategory !== "" &&
      productImage != "" &&
      productFreshness != ""
    ) {
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
    }
  }

  return (
    <Layout>
      <div className="container px-5 mb-14 text-center flex flex-col align-center md:px-[3rem] lg:px-[9rem]">
        <div className="h-[4rem] mb-4 flex justify-center md:mb-2 md:h-[4rem] lg:mb-4 lg:h-[4.5rem]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
            alt=""
            className="h-full"
          />
        </div>
        <h2 className="font-bold text-xl mb-1 md:text-2xl md:mb-2 lg:text-3xl lg:mb-1">
          Create Product
        </h2>
        <p className="text-sm lg:text-xl">
          Below is an example form built entirely with Bootstrap’s form
          controls. Each required form group has a validation state that can be
          triggered by attempting to submit the form without completing it.
        </p>
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
            onChange={(event) => setProductName(event.target.value)}
          />
          <Select
            label="Product Category"
            options={["Fruits", "Vegetable", "Dairy"]}
            value={productCategory}
            onChange={(event) => setProductCategory(event.target.value)}
          />
          <File
            label="Image Product"
            type="file"
            value={productImage}
            onChange={(event) => setProductImage(event.target.value)}
          />
          <Radio
            header="Product Freshness"
            labels={["Brand new", "Second Hand", "Refurbished"]}
            onChange={(event) => setProductFreshness(event.target.value)}
            name="productFreshness"
            selectedValue={productFreshness}
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
            onChange={(event) => setProductPrice(event.target.valueAsNumber)}
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
