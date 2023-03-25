import React from "react";

export function ColFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <input
      className="inputFilter"
      type="text"
      value={filterValue || ""}
      placeholder={`  ${column.Header} ...`}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}
