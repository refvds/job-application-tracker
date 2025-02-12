import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const TableShowSort = ({
  setPagination,
  pagination,
  data,
}: {
  setPagination: any;
  pagination: any;
  data: any;
}) => {
  const onSelectChange = (event: any) => {
    setPagination((prev) => {
      const newPageSize = event === 'all' ? data.length : Number(event);
      const newPageCount = Math.ceil(data.length / newPageSize);
      const newPageIndex = Math.min(prev.pageIndex, newPageCount - 1);

      return {
        pageIndex: newPageIndex,
        pageSize: newPageSize,
      };
    });
  };
  return (
    <Select
      value={String(pagination.pageSize)}
      onValueChange={(e) => onSelectChange(e)}
    >
      <SelectTrigger className='w-[180px] bg-white/50 backdrop-blur-md '>
        <SelectValue placeholder={pagination.pageSize}>
          {pagination.pageSize === data.length ? 'All' : pagination.pageSize}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectItem value='10'>10</SelectItem>
        <SelectItem value='30'>30</SelectItem>
        <SelectItem value='50'>50</SelectItem>
        <SelectItem value='all'>All</SelectItem>
      </SelectContent>
    </Select>
  );
};
