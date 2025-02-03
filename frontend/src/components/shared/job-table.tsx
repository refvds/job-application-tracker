import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { ArrowDown, ArrowUp, ArrowUpDown, CirclePlus } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { seedData as data } from '@/constants/seed';
import { tableColumns as columns } from './table-columns';

export const JobTable = () => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='w-full max-h-[800px] overflow-y-scroll rounded-lg border'>
      <Table
        className={cn(
          'border rounded-lg border-gray-300 overflow-hidden table-fixed ',
        )}
      >
        <TableHeader className='overflow-hidden  bg-white'>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className='border-b border-gray-300 '
            >
              <TableHead className='p-0 w-14 max-sm:w-10  '>
                <Button className='max-sm:w-3'>
                  <CirclePlus size={18} />
                </Button>
              </TableHead>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={cn(
                    'text-sm text-slate-600 text-left font-semibold tracking-wide max-sm:text-[10px] max-md:text-md ',
                  )}
                >
                  {header.isPlaceholder ? null : (
                    <div className='flex items-center max-sm:flex-col'>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                      {header.column.getCanSort() && (
                        <button
                          onClick={header.column.getToggleSortingHandler()}
                          className='ml-2 flex items-center'
                          title={
                            header.column.getNextSortingOrder() === 'asc'
                              ? 'Sort ascending'
                              : header.column.getNextSortingOrder() === 'desc'
                                ? 'Sort descending'
                                : 'Clear sort'
                          }
                        >
                          {header.column.getIsSorted() === 'asc' && (
                            <ArrowUp className='w-4 h-4 text-slate-600 max-sm:w-3 max-sm:h-3' />
                          )}
                          {header.column.getIsSorted() === 'desc' && (
                            <ArrowDown className='w-4 h-4 text-slate-600 max-sm:w-3 max-sm:h-3' />
                          )}
                          {header.column.getIsSorted() === false && (
                            <ArrowUpDown className='w-4 h-4 text-slate-600 max-sm:w-3 max-sm:h-3' />
                          )}
                        </button>
                      )}
                    </div>
                  )}
                </TableHead>
              ))}
              <TableHead className='max-sm:hidden w-[100px]'></TableHead>
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className='bg-white/50 backdrop-blur-md w-full'>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
