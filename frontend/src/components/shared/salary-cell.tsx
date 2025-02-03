import { cn } from '@/lib/utils';
import { FC } from 'react';
import { SalarySlot } from './salary-slot';
import { TSalaryType, TSalaryValue } from '../types/record';

interface IProps {
  type: TSalaryType;
  value: TSalaryValue;
  labels?: boolean;
}

export const SalaryCell: FC<IProps> = ({ type, value, labels = true }) => {
  return (
    <>
      {type === 'range' && (
        <div
          className={cn(
            'flex items-center',
            labels && 'justify-center',
            'max-md:flex-col max-md:items-start',
          )}
        >
          <SalarySlot value={value.from} labels={labels} />
          <span className='mx-2'>-</span>
          <SalarySlot value={value.to} labels={labels} />
        </div>
      )}
      {(type === 'fixed' || type === 'notSpecified') && (
        <div className='w-fit bg-white/70 backdrop-blur-md rounded-md py-1 px-3 '>
          <span className='text-black '>
            {type === 'fixed' ? '$' : ''} {value}
          </span>
        </div>
      )}
    </>
  );
};
