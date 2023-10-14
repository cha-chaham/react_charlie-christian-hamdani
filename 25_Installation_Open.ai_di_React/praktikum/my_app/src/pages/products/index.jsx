import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect, useMemo } from "react";
import * as z from "zod";
import Swal from "@/utils/swal";

import {
  Input,
  RadioGroup,
  Select,
  TextArea,
  Toggle,
} from "@/components/input";
import Layout from "@/components/layout";
import { Button2 } from "@/components/button";
import Table from "@/components/table";
import { ArticleTitle, ArticleDescription } from "@/components/article";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "@/utils/api/products/api";

const MAX_FILE_SIZE = 500000;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const schema = z.object({
  id: z.string().optional(),
  productName: z
    .string()
    .min(1, { message: "Please enter a valid product name" })
    .max(25, { message: "Product name must not exceed 25 characters" }),
  productCategory: z
    .string()
    .min(1, { message: "Please enter a valid product category" }),
  image: z
    .any()
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max image size is 5MB.`
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  productFreshness: z
    .string()
    .min(1, { message: "Please enter a valid product freshness" }),
  additionalDescription: z
    .string()
    .min(1, { message: "Please enter a valid additional description" }),
  productPrice: z
    .number()
    .min(1, { message: "Please enter a valid product price" }),
});

export default function Index() {
  const [selectedId, setSelectedId] = useState("");
  const [products, setProducts] = useState([]);

  const {
    reset,
    setValue,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      productFreshness: "",
      productPrice: 0,
    },
  });

  const columns = useMemo(
    () => [
      {
        header: "No",
        accessorKey: "id",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Product Name",
        accessorKey: "productName",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Product Category",
        accessorKey: "productCategory",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Image of Product",
        accessorKey: "image",
        cell: (info) => (
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={info.row.original.image}
                  alt={info.row.original.productName}
                />
              </div>
            </div>
            <p>{info.row.original.image}</p>
          </div>
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "Product Freshness",
        accessorKey: "productFreshness",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Additional Description",
        accessorKey: "additionalDescription",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "Product Price",
        accessorKey: "productPrice",
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      },
      {
        header: "",
        accessorKey: "actionEdit",
        cell: (info) => (
          <button
            className="bg-orange-500 text-white me-2 mb-1 px-3 py-2 rounded-md hover:bg-orange-600 hover:ease-in transition"
            onClick={() => onClickEdit(info.row.original)}
          >
            Edit
          </button>
        ),
        footer: (props) => props.column.id,
      },
      {
        header: "",
        accessorKey: "actionDelete",
        cell: (info) => (
          <button
            className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 hover:ease-in transition"
            onClick={() =>
              onClickDelete(info.row.original.id, info.row.original.productName)
            }
          >
            Delete
          </button>
        ),
        footer: (props) => props.column.id,
      },
    ],
    []
  );

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const result = await getProducts();
      setProducts(result);
    } catch (error) {
      console.log(error.toString());
    }
  }

  async function onSubmit(data) {
    try {
      await createProduct(data);
      Swal.fire({
        title: "Success",
        text: "Berhasil Menambahkan Produk Baru",
        icon: "success",
        showCancelButton: false,
      });
      reset();
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  async function onSubmitEdit(data) {
    try {
      await updateProduct({ ...data, id: selectedId });
      Swal.fire({
        title: "Success",
        icon: "success",
        text: "Berhasil Memperbarui Data Produk",
        showCancelButton: false,
      });
      setSelectedId("");
      reset();
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  function onClickEdit(data) {
    setSelectedId(data.id);
    setValue("productName", data.productName);
    setValue("productCategory", data.productCategory);
    setValue("image", data.image);
    setValue("productFreshness", data.productFreshness);
    setValue("additionalDescription", data.additionalDescription);
    setValue("productPrice", data.productPrice);
  }

  async function onClickDelete(id_product, name_product) {
    try {
      await deleteProduct(id_product);
      Swal.fire({
        title: "Success",
        text: "Berhasil Menghapus Produk " + name_product,
        icon: "success",
        showCancelButton: false,
      });
      fetchData();
    } catch (error) {
      Swal.fire({
        title: "Error",
        icon: "error",
        text: error.message,
        showCancelButton: false,
      });
    }
  }

  return (
    <Layout>
      <div className="container px-5 mt-10 text-center flex flex-col align-center md:px-[3rem] lg:px-[9rem]">
        <div className="h-[4rem] mb-4 flex justify-center md:mb-2 md:h-[4rem] lg:mb-4 lg:h-[4.5rem]">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png"
            alt=""
            className="h-full"
          />
        </div>
        <ArticleTitle language="en" />
        <ArticleDescription language="en" />
      </div>
      <form
        onSubmit={handleSubmit(selectedId == "" ? onSubmit : onSubmitEdit)}
        aria-label="product-form"
      >
        <Input
          id="input-product-name"
          aria-label="input-product-name"
          label="Product Name"
          name="productName"
          register={register}
          error={errors.productName?.message}
        />
        <Select
          id="input-product-category"
          aria-label="input-product-category"
          label="Product Category"
          name="productCategory"
          options={["Dairy", "Vegetable", "Snacks"]}
          placeholder="Choose..."
          register={register}
          error={errors.productCategory?.message}
        />
        <Input
          id="input-product-image"
          aria-label="input-product-image"
          label="Image of Product"
          name="image"
          type="file"
          register={register}
          error={errors.image?.message}
        />
        <RadioGroup
          id="input-product-freshness"
          aria-label="input-product-freshness"
          label="Product Freshness"
          name="productFreshness"
          options={["Brand New", "Second Hand", "Refurbished"]}
          register={register}
          error={errors.productFreshness?.message}
        />
        <TextArea
          id="input-product-description"
          aria-label="input-product-description"
          label="Additional Description"
          role="input"
          name="additionalDescription"
          register={register}
          error={errors.additionalDescription?.message}
        />
        <Input
          id="input-product-price"
          aria-label="input-product-price"
          label="Product Price"
          name="productPrice"
          type="number"
          register={register}
          error={errors.productPrice?.message}
        />
        <Button2
          id="btn-submit"
          aria-label="btn-submit"
          label="Submit"
          type="submit"
          disabled={isSubmitting}
        />
      </form>
      <Table datas={products} columns={columns} />
    </Layout>
  );
}
