import React from "react";
import { useNavigate } from "react-router-dom";

export default function Table(props) {
  const { headers = [], datas = [], deleteProduct, editProduct } = props;
  const navigate = useNavigate();

  return (
    <table className="table">
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="border-b">
            {header}
          </th>
        ))}
      </tr>
      {datas.map((data) => (
        <tr key={data.id} className="hover border-b">
          <td>{data.id}</td>
          <td
            onClick={() => navigate(`/product/${data.id}`)}
            className="cursor-pointer"
          >
            {data.productName}
          </td>
          <td>{data.productCategory}</td>
          <td>{data.productImage}</td>
          <td>{data.productFreshness}</td>
          <td>{data.productPrice}</td>
          <td>{data.productDescription}</td>
          <td className="text-center">
            <button
              onClick={() => editProduct(data)}
              className="bg-orange-500 text-white me-2 mb-1 px-3 py-2 rounded-md hover:bg-orange-600 hover:ease-in transition"
            >
              Edit
            </button>
            <button
              onClick={() => deleteProduct(data.id)}
              className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600 hover:ease-in transition"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}
