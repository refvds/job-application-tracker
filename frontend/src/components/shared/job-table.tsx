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
import { Modal } from '../ui/modal';
import { TableForm } from './table-form';
import { useTableActions } from '@/hooks/use-table-actions';

export const JobTable = () => {
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  const { openModal, handleClickModal, setOpenModal } = useTableActions();

  return (
    <div className='max-h-[800px] overflow-y-scroll rounded-lg border lg:custom-scroll'>
      <Table
        className={cn(
          'border rounded-lg border-gray-300 overflow-hidden table-fixed w-full',
        )}
      >
        <TableHeader className='overflow-hidden  bg-white relative z-10'>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow
              key={headerGroup.id}
              className='border-b border-gray-300 '
            >
              <TableHead className='p-0 w-14 max-sm:w-10  '>
                <Button
                  className='max-sm:w-3'
                  onClick={() => setOpenModal(true)}
                >
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
        <TableBody className='bg-white/50 backdrop-blur-md  w-full'>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className='max-sm:bg-white/50 max-sm:flex max-sm:flex-col max-sm:w-screen duration-200 ease-in-out  md:hover:translate-y-[-9px] md:hover:translate-x-[4px]  relative md:hover:backdrop-blur-lg transition-all '
                >
                  <TableCell className='p-4 w-56 max-sm:hidden'>
                    <Checkbox className='cursor-pointer' />
                  </TableCell>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell
                        key={cell.id}
                        className='text-sm p-2 max-sm:bg-inherit'
                      >
                        <div className='max-sm:flex max-sm:justify-between'>
                          <div className='hidden max-sm:block w-full'>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </div>
                          <div className='w-full max-sm:text-middle'>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </div>
                        </div>
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal open={openModal} handleOpen={handleClickModal}>
        <TableForm closeForm={handleClickModal} />
      </Modal>
    </div>
  );
};
