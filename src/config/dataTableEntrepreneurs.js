export const Columns = [
  {
    name: 'NOME',
    selector: 'name',
    sortable: true,
    center: true,
  },
  {
    name: 'VALOR DO PACOTE',
    selector: 'name',
    sortable: true,
    center: true,
    hide: 'sm',
  },
  {
    name: 'COMISSÃO RECEBIDA',
    selector: 'name',
    sortable: true,
    center: true,
    minWidth: '139px',
  },
  {
    name: 'CIDADE/ESTADO',
    selector: 'name',
    sortable: true,
    center: true,
    hide: 'lg',
  },
  {
    name: 'DATA',
    selector: 'name',
    sortable: true,
    center: true,
    hide: 'lg',
  },
];

export const CustomStyles = {
  rows: {
    style: {
      '&:hover': { cursor: 'pointer' },
      color: '#7c7c7c',
    },
  },
  headCells: {
    style: {
      color: '#7c7c7c',
      paddingLeft: '0px',
      paddingRight: '0px',
    },
  },
  cells: {
    style: {
      padding: '0px',
    },
  },
};

export const PaginationOptions = {
  rowsPerPageText: 'Linhas por página',
  rangeSeparatorText: 'de',
  selectAllRowsItem: false,
};
