import { ColumnDef } from '@tanstack/react-table';
import { IRecord } from '../types/record';
import { SalaryCell } from './salary-cell';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

type CustomColumnDef<TData> = ColumnDef<TData> & {
  headerClassName?: string;
};

export const tableColumns: CustomColumnDef<IRecord>[] = [
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
    headerClassName: 'w-[150px] max-md:w-[80px]',
    cell: ({ cell }) => {
      return (
        <Badge
          variant='outline'
          className={cn(
            'p-[6px] rounded-md border-0',
            cell.row.original.status.type,
          )}
        >
          {cell.row.original.status.value}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'note',
    header: 'Note',
    enableSorting: true,
  },
];
