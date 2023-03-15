import React, { useMemo } from "react";
import data from "../Data/dock-data.json";
import MaterialReactTable from "material-react-table";

function NewTable() {
  const columns = useMemo(
    () => [
      {
        accessorKey: "id", //access nested data with dot notation
        header: "id",
      },
      {
        accessorKey: "fullname",
        header: "Nom Complet",
      },
      {
        accessorKey: "journalier", //normal accessorKey
        header: "journalier",
      },
      {
        accessorKey: "mensuel",
        header: "Mensuel",
      },
    ],
    []
  );
  return <MaterialReactTable columns={columns} data={data} />;
}

export default NewTable;
