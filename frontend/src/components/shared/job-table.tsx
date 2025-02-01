import React, { FC } from 'react';

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
import { CirclePlus } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { seedData } from '@/constants/seed';

interface IProps {
  className?: string;
}

export const JobTable: FC<IProps> = ({ className }) => {
  return (
    <div className="w-full h-full rounded-lg border">
      <Table
        className={cn(
          'border rounded-lg border-gray-300 overflow-hidden table-fixed ',
          className,
        )}
      >
        <TableHeader className="overflow-hidden ">
          <TableRow>
            <TableHead>
              <Button size="icon">
                <CirclePlus />
              </Button>
            </TableHead>
            <TableHead className="w-[100px]">Company</TableHead>
            <TableHead>Position</TableHead>
            <TableHead>Salary</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Note</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {seedData.map((elem) => (
            <TableRow key={elem.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{elem.company}</TableCell>
              <TableCell>{elem.position}</TableCell>
              <TableCell>-</TableCell>
              <TableCell>{elem.status.value}</TableCell>
              <TableCell>{elem.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
