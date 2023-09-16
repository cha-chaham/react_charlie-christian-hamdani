import React from "react";

export default function Table(props) {
  const { headers = [], datas = [] } = props;

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
          <td>{data.productName}</td>
          <td>{data.productCategory}</td>
          <td>{data.productImage}</td>
          <td>{data.productFreshness}</td>
          <td>{data.productPrice}</td>
          <td>{data.productDescription}</td>
        </tr>
      ))}
    </table>
  );
}
