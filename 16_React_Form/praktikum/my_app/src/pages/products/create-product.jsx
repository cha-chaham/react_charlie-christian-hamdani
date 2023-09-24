import React, { Component, useState, useEffect } from "react";
import "@/styles/App.css";
import Swal from "@/utils/swal";
import withReactContent from "sweetalert2-react-content";
import { useForm, Controller } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import os from "node:os";
import randomPath from "random-path";

import Layout from "@/components/layout";
import {
  Input,
  Select,
  TextArea,
  File,
  Radio,
  Toggle,
  Number,
} from "@/components/input";
import Button from "@/components/button";
import Table from "@/components/table";
import { ArticleTitle, ArticleDescription } from "@/components/article";

const validCategories = ["Fruits", "Vegetables", "Dairy"];

const schema = z.object({
  productName: z
    .string()
    .min(1, { message: "Input Valid Name" })
    .max(25, { message: "Product Name must not exceed 25 characters" }),
  productCategory: z
    .string()
    .refine((value) => validCategories.includes(value), {
      message: "Must Choose A Valid Category",
    })
    .refine((value) => value !== "" && value !== "Choose...", {
      message: "Product Category is required",
    }),
  productPrice: z
    .number()
    .min(1, { message: "Product Price Must Be Greater Than 0" }),
});

// Functional component biasa disebut sebagai stateless component
export default function CreateProduct1() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState(0);

  const [isEdit, setIsEdit] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    id: null,
    productName: "",
    productCategory: "",
    productDescription: "",
    productImage: "",
    productFreshness: "",
    productPrice: 0,
  });
  const [editedProductId, setEditedProductId] = useState(null);
  const [editedProductData, setEditedProductData] = useState(editedProduct);

  const [language, setLanguage] = useState("en");

  const [products, setProducts] = useState([]);

  const [errorProductImage, setErrorProductImage] = useState("");
  const [errorProductFreshness, setErrorProductFreshness] = useState("");

  let isValid = false;

  useEffect(() => {
    const getItem = localStorage.getItem("products");

    // Jika belum ada item maka localstorage telah ada item products kosong
    if (!getItem) {
      localStorage.setItem("products", JSON.stringify([]));
    }

    setProducts(getProducts());
  }, []);

  function getProducts() {
    const getItem = localStorage.getItem("products");

    if (getItem) {
      const parseProducts = JSON.parse(getItem);
      return parseProducts;
    }
  }

  function deleteProduct(id) {
    const mySwal = withReactContent(Swal);

    mySwal
      .fire({
        title: "Konfirmasi",
        text: `Anda yakin ingin menghapus produk ini?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Benar",
        cancelButtonText: "Batal",
      })
      .then((result) => {
        if (result.isConfirmed) {
          performDelete(id);
        }
      });
  }

  function performDelete(id) {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);

    localStorage.setItem("products", JSON.stringify(updatedProducts));

    // Menampilkan pesan SweetAlert setelah berhasil menghapus produk
    const mySwal = withReactContent(Swal);

    mySwal.fire({
      title: "Sukses",
      text: "Produk berhasil dihapus.",
      icon: "success",
    });
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

  function validateForm() {
    let isValid = true;

    if (!validateProductImage(productImage)) {
      isValid = false;
    }

    if (!validateProductFreshness(productFreshness)) {
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

  function handleProduct(data) {
    if (isEdit) {
      setValue("productName", data.productName);
      const updatedEditedProductData = {
        ...editedProductData,
        productName: data.productName,
        productCategory: data.productCategory,
        productDescription,
        productImage,
        productFreshness,
        productPrice: data.productPrice,
      };
      if (validateForm()) {
        const updatedProducts = products.map((product) =>
          product.id === updatedEditedProductData.id
            ? updatedEditedProductData
            : product
        );

        setProducts(updatedProducts);
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        setIsEdit(false);

        setProductFreshness("");
        setProductImage("");
        setProductName("");
        setProductCategory("Choose...");
        setProductPrice(0);
        setProductDescription("");

        const mySwal = withReactContent(Swal);

        mySwal.fire({
          title: "Sukses",
          text: `Sukses Mengubah Data!`,
          icon: "success",
        });

        console.log("productName:", productName);
        console.log("productCategory:", productCategory);
        console.log("productDescription:", productDescription);
        console.log("productImage:", productImage);
        console.log("productFreshness:", productFreshness);
        console.log("productPrice:", productPrice);
      } else {
        Swal.fire({
          title: "Inputan Belum Terisi Semua",
          text: "Periksa kembali setiap inputan anda",
          icon: "warning",
          showCancelButton: false,
        });
      }
    } else if (validateForm()) {
      const product = {
        id: products.length + 1,
        productName: data.productName,
        productCategory: data.productCategory,
        productPrice: data.productPrice,
        productDescription: productDescription,
        productImage: productImage,
        productFreshness: productFreshness,
      };
      const dupeProducts = [...products, product];

      setProducts(dupeProducts);
      localStorage.setItem("products", JSON.stringify(dupeProducts));

      setProductFreshness("");
      setProductImage("");
      setProductName("");
      setProductCategory("Choose...");
      setProductPrice(0);
      setProductDescription("");
    } else {
      const mySwal = withReactContent(Swal);
      Swal.fire({
        title: "Error",
        text: "Periksa Kembali Inputan Anda!!!",
        icon: "error",
        showCancelButton: false,
      });
      validateProductFreshness(productFreshness);
      validateProductImage(productImage);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <Layout>
      <div className="container px-5 mt-10 text-center flex flex-col align-center md:px-[3rem] lg:px-[9rem]">
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
        <form onSubmit={handleSubmit(handleProduct)}>
          <Input
            name="productName"
            register={register}
            label="Product Name"
            type="text"
            defaultValue={isEdit ? editedProductData.productName : ""}
            errorMessage={errors.productName?.message}
          />
          <Select
            name="productCategory"
            register={register}
            label="Product Category"
            options={validCategories}
            errorMessage={errors.productCategory?.message}
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

          <Number
            name="productPrice"
            register={register}
            label="Product Price"
            type="number"
            errorMessage={errors.productPrice?.message}
          />
          <div className="container w-full mt-12">
            <Button label="Submit" type="submit" />
          </div>
        </form>
      </div>
      <div className="container px-3 overflow-auto md:px-[1rem] lg:px-[2rem]">
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
            "Action",
          ]}
          datas={products}
          deleteProduct={deleteProduct}
          editProduct={(data) => {
            console.log(data);
            setIsEdit(true);
            setEditedProductData(data);
            setEditedProductId(data.id);
            setProductName(data.productName);
            setProductCategory(data.productCategory);
            setProductDescription(data.productDescription);
            setProductFreshness(data.productFreshness);
            setProductPrice(data.productPrice);
          }}
        />
      </div>
    </Layout>
  );
}
