
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
]

function SortingDataTable() {
  return (
    <>
      <DataTable
        columns={columns}
        data={data}
      />
    </>
  )
}

export default SortingDataTable