import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import "../styles/tables.css";

import { useTable, useSortBy, useFilters, usePagination } from "react-table";

import { deleteActe } from "../helpers/DeleteActe";
import { ColFilter } from "./InputFilter";

function CustomTable({
  inc_data,
  inc_cols,
  isPatient = false,
  isMedecin = false,
}) {
  const columns = useMemo(() => inc_cols, []);
  const data = useMemo(() => inc_data, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColFilter,
    };
  }, []);

  const initialState = {
    pageSize: 8,
    hiddenColumns: ["id"],
  };
  const instance = useTable(
    { columns, data, defaultColumn, initialState },
    useFilters,
    useSortBy,
    usePagination
  );
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = instance;
  const { pageIndex } = state;
  return (
    <div className="table-container">
      <table className="is-table" {...getTableProps()}>
        <thead className="tbl-header">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <>
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    <div className="tab-name">
                      {column.render("Header")}
                      <span>
                        {column.canSort ? (
                          <>
                            <i className="fa-solid fa-sort"></i>
                          </>
                        ) : null}
                      </span>
                    </div>
                    {column.canFilter ? column.render("Filter") : null}
                  </th>
                </>
              ))}
              {isPatient && (
                <>
                  <th colSpan={1} role="columnheader">
                    <div className="tab-name">Consultation</div>
                  </th>
                  <th colSpan={1} role="columnheader">
                    <div className="tab-name">Suppression</div>
                  </th>
                </>
              )}
              {isMedecin && (
                <th colSpan={1} role="columnheader">
                  <div className="tab-name">Détail</div>
                </th>
              )}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="tbl-content">
          {page.map((row) => {
            prepareRow(row);
            const id = row.values.id;
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
                {isMedecin && (
                  <td>
                    <Link to={`doc/${id}`} className="custom-btn  btn-info">
                      Details
                    </Link>
                  </td>
                )}
                {isPatient && (
                  <>
                    <td>
                      <Link
                        className="custom-btn btn-edit"
                        to={`/réceptionniste/edit/${id}`}
                      >
                        Modifier
                      </Link>
                    </td>
                    <td>
                      <Link
                        className="custom-btn btn-danger"
                        to=""
                        onClick={() => deleteActe(id)}
                      >
                        Delete
                      </Link>
                    </td>
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="page-btns">
        <span className="label">
          Page {pageIndex + 1} de {pageOptions.length}
        </span>
        <div className="field is-grouped">
          <p className="control">
            <button
              className="custom-btn btn-default"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Précédent
            </button>
          </p>
          <p className="control">
            <button
              className="custom-btn  btn-default"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Suivant
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CustomTable;
