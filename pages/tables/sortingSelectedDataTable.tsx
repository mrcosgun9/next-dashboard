
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Title',
    selector: (row: { title: any; }) => row.title,
    sortable: true,
  },
  {
    name: 'Year',
    selector: (row: { year: any; }) => row.year,
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 3,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 4,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 5,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 6,
    title: 'Ghostbusters',
    year: '1984',
  },
  {
    id: 7,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 8,
    title: 'Ghostbusters',
    year: '1984',
  },
]

function SortingSelectedDataTable() {
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
        selectableRows pagination
      />
    </>
  )
}

export default SortingSelectedDataTable