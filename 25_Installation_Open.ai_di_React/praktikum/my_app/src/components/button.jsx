import React from "react";

function Button(props) {
  const { label, onClick, type, addclass } = props;

  return (
    <button
      className="py-3  bg-blue-600 rounded-xl px-6 text-white font-base"
      onClick={onClick}
      type={type}
      aria-label={props["aria-label"]}
    >
      {label}
    </button>
  );
}

function Button2(props) {
  const { label, onClick, type, addclass } = props;

  return (
    <button
      className="p-3 w-full bg-blue-600 rounded-xl px-6 text-white font-base"
      onClick={onClick}
      type={type}
      aria-label={props["aria-label"]}
    >
      {label}
    </button>
  );
}

export { Button, Button2 };
