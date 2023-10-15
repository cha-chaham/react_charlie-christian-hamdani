import React, { Component, useState, useEffect } from "react";
import "@/styles/App.css";
import Swal from "@/utils/swal";
import withReactContent from "sweetalert2-react-content";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector, useDispatch } from "react-redux";

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
import { Button } from "@/components/button";
import Table from "@/components/table";
import { ArticleTitle, ArticleDescription } from "@/components/article";
import {
  setProducts,
  deleteProducts,
  editProducts,
} from "@/utils/state/redux/reducers/reducer";

const VALID_PRODUCT_CATEGORIES = ["Fruits", "Vegetables", "Dairy"];
const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const VALID_PRODUCT_FRESHNESS = ["Brand New", "Second Hand", "Refurbished"];

const schema = z.object({
  productName: z
    .string()
    .min(1, { message: "Input Valid Name" })
    .max(25, { message: "Product Name must not exceed 25 characters" }),
  productCategory: z
    .string()
    .refine((value) => VALID_PRODUCT_CATEGORIES.includes(value), {
      message: "Must Choose A Valid Category",
    })
    .refine((value) => value !== "" && value !== "Choose...", {
      message: "Product Category is required",
    }),
  productPrice: z
    .number({
      required_error: "Product Price Required",
      invalid_type_error: "Product Price Required",
    })
    .min(1, { message: "Product Price Must Be Greater Than 0" }),
  productImage: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp files are accepted."
    ),
  productFreshness: z
    .string({ invalid_type_error: "Please Choose The Product Freshness" })
    .refine((value) =>
      VALID_PRODUCT_FRESHNESS.map((valid) => valid).includes(value)
    ),
  productDescription: z.string(),
});

// Functional component biasa disebut sebagai stateless component
export default function CreateProduct1() {
  const { products } = useSelector((state) => state.data);
  const dispatch = useDispatch();

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

  let isValid = false;

  function deleteProduct(id) {
    Swal.fire({
      title: "Konfirmasi",
      text: `Anda yakin ingin menghapus produk ini?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Benar",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        performDelete(id);
      }
    });
  }

  function performDelete(id) {
    dispatch(deleteProducts(id));

    // Menampilkan pesan SweetAlert setelah berhasil menghapus produk
    const mySwal = withReactContent(Swal);

    mySwal.fire({
      title: "Sukses",
      text: "Produk berhasil dihapus.",
      icon: "success",
    });
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
      const updatedEditedProductData = {
        id: editedProductId,
        productName: data.productName,
        productCategory: data.productCategory,
        productDescription: data.productDescription,
        productImage: data.productImage[0].name,
        productFreshness: data.productFreshness,
        productPrice: data.productPrice,
      };

      dispatch(editProducts(updatedEditedProductData));
      setIsEdit(false);

      resetField("productName");
      setValue("productCategory", "Choose...");
      resetField("productImage");
      resetField("productFreshness");
      resetField("productDescription");
      resetField("productPrice");

      Swal.fire({
        title: "Sukses",
        text: `Sukses Mengubah Data!`,
        icon: "success",
      });
    } else {
      const product = {
        id: products.length + 1,
        productName: data.productName,
        productCategory: data.productCategory,
        productPrice: data.productPrice,
        productDescription: data.productDescription,
        productImage: data.productImage[0].name,
        productFreshness: data.productFreshness,
      };
      const dupeProducts = [...products, product];

      dispatch(setProducts(dupeProducts));

      resetField("productName");
      setValue("productCategory", "Choose...");
      resetField("productImage");
      resetField("productFreshness");
      resetField("productDescription");
      resetField("productPrice");

      Swal.fire({
        title: "Sukses",
        text: `Sukses Menambahkan Data!`,
        icon: "success",
      });
    }
  }

  const {
    register,
    handleSubmit,
    setValue,
    resetField,
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
            errorMessage={errors.productName?.message}
          />
          <Select
            name="productCategory"
            register={register}
            label="Product Category"
            options={VALID_PRODUCT_CATEGORIES}
            errorMessage={errors.productCategory?.message}
          />
          <File
            label="Image Product"
            type="file"
            name="productImage"
            register={register}
            errorMessage={errors.productImage?.message}
          />
          <Radio
            header="Product Freshness"
            labels={VALID_PRODUCT_FRESHNESS}
            name="productFreshness"
            errorMessage={errors.productFreshness?.message}
            register={register}
          />

          <TextArea
            label="Product Description"
            name="productDescription"
            register={register}
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
            setIsEdit(true);
            setEditedProductId(data.id);
            setValue("productName", data.productName);
            setValue("productCategory", data.productCategory);
            setValue("productPrice", data.productPrice);
            setValue("productDescription", data.productDescription);
            setValue("productFreshness", data.productFreshness);
          }}
        />
      </div>
    </Layout>
  );
}
