export const columnes = [
  {
    Header: "id",
    accessor: "id",
  },
  {
    Header: "Nom Complet",
    accessor: "fullname",
    disableFilters: false,
    disableSortBy: true,
  },
  {
    Header: "Journalier",
    accessor: (row) => `${row.journalier} DH TTC `,
    disableFilters: true,
    disableSortBy: false,
  },
  {
    Header: "Mensuel",
    accessor: (row) => `${row.mensuel} DH TTC `,
    disableFilters: true,
    disableSortBy: false,
  },
];
