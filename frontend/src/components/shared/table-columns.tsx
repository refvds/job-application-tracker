import { ColumnDef } from '@tanstack/react-table';
import { IRecord } from '../types/record';
import { SalaryCell } from './salary-cell';

export const tableColumns: ColumnDef<IRecord>[] = [
  {
    accessorKey: 'company',
    header: 'Company',
    sortDescFirst: true,
  },
  {
    accessorKey: 'position',
    header: 'Position',
    enableSorting: true,
  },
  {
    accessorKey: 'salary',
    header: 'Salary',
    enableSorting: true,

    cell: ({ cell }) => {
      return (
        <SalaryCell
          type={cell.row.original.salary.type}
          value={cell.row.original.salary.value}
        />
      );
    },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    enableSorting: true,
  },
  {
    accessorKey: 'note',
    header: 'Note',
    enableSorting: true,
  },
];
