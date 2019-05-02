import React from "react";

export default function SearchBox({ search, searchChange }) {
  return (
    <div className="pa2 search">
      <input type="search" placeholder="Search Users" onChange={searchChange} />
    </div>
  );
}
