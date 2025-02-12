import { cn } from '@/lib/utils';
import { TablePagination } from './table-pagination';
import { TableShowSort } from './table-show-sort';

export const TableFooter = ({
  table,
  data,
  pagination,
  setPagination,
}: {
  table: any;
  data: any;
  pagination: any;
  setPagination: any;
}) => {
  return (
    <div
      className={cn(
        'mt-3 max-sm:hidden flex justify-between',
        pagination.pageSize === data.length && 'justify-end',
      )}
    >
      <TablePagination table={table} />
      <TableShowSort
        data={data}
        pagination={pagination}
        setPagination={setPagination}
      />
    </div>
  );
};
