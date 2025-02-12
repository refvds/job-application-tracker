import { Pagination } from '@heroui/pagination';

export const TablePagination = ({ table }: { table: any }) => {
  return (
    <Pagination
      total={table.getPageCount()}
      initialPage={table.getState().pagination.pageIndex + 1}
      onChange={(page) => table.setPageIndex(page - 1)}
      siblings={1}
      classNames={{
        wrapper: 'rounded-lg gap-2 ',
        item: 'w-8 h-8 text-small rounded-none cursor-pointer rounded-md bg-white/50',
        cursor:
          'bg-gradient-to-t from-violet-300 to-pink-300 opacity-00 rounded-md transition-all duration-500',
      }}
    />
  );
};
