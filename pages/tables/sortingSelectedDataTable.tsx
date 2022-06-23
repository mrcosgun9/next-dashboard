
import DataTable from 'react-data-table-component';
import MainLayout from '../../layouts/MainLayout';

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
      <MainLayout title='Sorting Data Table'>
        <DataTable
          columns={columns}
          data={data}
          selectableRows
        />
      </MainLayout>

    </>
  )
}

export default SortingDataTable