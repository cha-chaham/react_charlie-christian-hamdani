import React from "react";

export default function Button(props) {
  const { label, onClick, type, addclass } = props;

  return (
    <button
      className="p-3 w-full bg-blue-600 rounded-xl px-6 text-white font-base"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
}
