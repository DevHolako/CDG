import React from "react";

export function ColFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <input
      className="inputFilter"
      type="text"
      value={filterValue || ""}
      placeholder="Search"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}
