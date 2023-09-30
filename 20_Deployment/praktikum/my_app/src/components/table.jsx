import React from "react";
import { useNavigate } from "react-router-dom";

export default function Table(props) {
  const { headers = [], datas = [], onDeleteClick, onEditClick } = props;
  const navigate = useNavigate();

  return (
    <table className="table" aria-label={props["aria-label"]}>
      <tr>
        {headers.map((header, index) => (
          <th key={index} className="border-b" aria-label={header}>
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
          <td>{data.additionalDescription}</td>
          <td>{data.productPrice}</td>
          <td className="text-center">
            <button
              onClick={onEditClick ? () => onEditClick(data) : null}
              className="bg-orange-500 text-white me-2 mb-1 px-3 py-2 rounded-md hover:bg-orange-600 hover:ease-in transition"
            >
              Edit
            </button>
            <button
              onClick={onDeleteClick ? () => onDeleteClick(data) : null}
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
