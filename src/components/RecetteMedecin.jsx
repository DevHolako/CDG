import React, { useMemo } from "react";
import { useTable, useSortBy, useFilters, usePagination } from "react-table";
import { ColFilter } from "./ColFilter";
import "../styles/RecetteMedecin.css";
import "../styles/tables.css";
import { Link } from "react-router-dom";
function RecetteMedecin({ inc_data, inc_cols }) {
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
    <>
      <div className="tab">
        <table id="Medecin_tab" {...getTableProps()}>
          <thead className="tbl-header">
            {headerGroups.map((headerGroup) => (
              <tr className="" {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <>
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      <div className="tab-headers">
                        <div className="label tab-name">
                          {column.render("Header")}
                          <span>
                            {column.canSort ? (
                              <>
                                <i className="fa-solid fa-sort"></i>
                              </>
                            ) : null}
                          </span>
                        </div>
                        <div className="filter">
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      </div>
                    </th>
                  </>
                ))}
                <th colspan="1" role="columnheader">
                  <div className="tab-headers">
                    <div className="label tab-name">Détail</div>
                  </div>
                </th>
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
                  <td>
                    <Link
                      to={`/doc/${id}`}
                      className="button is-info btn-medecin"
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="page-btns">
        <span className="label">
          Page {pageIndex + 1} de {pageOptions.length}
        </span>
        <div className="field is-grouped">
          <p className="control">
            <button
              className="button is-link "
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Précédent
            </button>
          </p>
          <p className="control">
            <button
              className="button is-link"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Suivant
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default RecetteMedecin;
