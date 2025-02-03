import { cn } from '@/lib/utils';

export const SalarySlot = ({
  value,
  labels,
}: {
  value: number;
  labels: boolean;
}) => {
  return (
    <div
      className={cn(
        labels ? 'flex gap-1 items-center w-36 max-md:w-16 ' : 'w-16',
        '  bg-white/70 backdrop-blur-md rounded-md p-1  ',
      )}
    >
      <span className='text-black '>$ {value}</span>
    </div>
  );
};
