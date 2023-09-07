import React from "react";

export default function layout({ children }) {
  return (
    <div className="w-screen h-full overflow-auto">
      <nav className="w-full bg-red-500 h-16">
        <h1>TEST</h1>
      </nav>
      {children}
    </div>
  );
}
