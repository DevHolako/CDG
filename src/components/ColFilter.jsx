import React from "react";

export function ColFilter({ column }) {
  const { filterValue, setFilter } = column;
  return (
    <input
      className="input  is-small "
      type="text"
      value={filterValue || ""}
      placeholder="Search"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}

// import React, { useState } from "react";
// import { useAsyncDebounce } from "react-table";

// export function ColFilter({ column }) {
//   const { filterValue, setFilter } = column;
//   const [value, SetValue] = useState(filterValue);
//   const onChange = useAsyncDebounce((value) => {
//     setFilter(value);
//   }, 1000);
//   return (
//     <input
//       className="input  is-small "
//       type="text"
//       value={value || ""}
//       placeholder="Search"
//       onChange={(e) => {
//         SetValue(e.target.value);
//         onChange(e.target.value);
//       }}
//     />
//   );
// }
