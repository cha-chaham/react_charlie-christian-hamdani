import React, { Component, useState, useEffect } from "react";
import "@/styles/App.css";
import { useParams, useNavigate } from "react-router-dom";

import Layout from "@/components/layout";
import { Button } from "@/components/button";
import { LoadingSpinner } from "@/components/loading";
import { get } from "react-hook-form";

// Functional component biasa disebut sebagai stateless component
export default function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const navigate = useNavigate();

  let productName,
    productCategory,
    productPrice,
    productFreshness,
    productDescription;

  useEffect(() => {
    const getProduct = findProducts();

    const image = new Image();
    image.src = "https://source.unsplash.com/random/800x800/?product";
    image.onload = () => {
      setIsLoading(false);
      setIsImageLoaded(true);
    };

    setProduct(getProduct);
  }, []);
  productName = product.productName;
  productCategory = product.productCategory;
  productPrice = product.productPrice;
  productFreshness = product.productFreshness;
  productDescription = product.productDescription;
  function findProducts() {
    const products = getProducts();
    const getItem = products.find((product) => product.id == id);

    return getItem;
  }

  function getProducts() {
    const getItem = localStorage.getItem("products");

    if (getItem) {
      const parseProducts = JSON.parse(getItem);
      return parseProducts;
    }
  }

  function goBack() {
    navigate(-1);
  }

  return (
    <Layout>
      <div className="mt-10">
        <div className="flex flex-col md:flex-row gap-2 w-screen px-10">
          <div className="flex justify-center w-fit">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              isImageLoaded && (
                <img
                  className="h-[10rem] md:h-[20rem] lg:h-[25rem]"
                  src="https://source.unsplash.com/random/800x800/?product"
                  alt=""
                />
              )
            )}
          </div>
          <div className="py-3 px-8 w-fit">
            <h1 className="font-bold text-2xl">Product Name :</h1>
            <p className="text-xl mb-3">{productName}</p>
            <h1 className="font-bold text-2xl">Product Category :</h1>
            <p className="text-xl mb-3">{productCategory}</p>
            <h1 className="font-bold text-2xl">Product Freshness :</h1>
            <p className="text-xl mb-3">{productFreshness}</p>
            <h1 className="font-bold text-2xl">Product Price :</h1>
            <p className="text-xl mb-3">{productPrice}</p>
            <h1 className="font-bold text-2xl">Product Description :</h1>
            <p className="text-xl mb-3">{productDescription}</p>
            <Button type="button" label="Back" onClick={() => goBack()} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
