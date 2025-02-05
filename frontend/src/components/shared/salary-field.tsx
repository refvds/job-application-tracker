import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useFormContext } from 'react-hook-form';

import { Input } from '../ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export const SalaryField = () => {
  const { control, watch, setValue, getValues } = useFormContext();
  return (
    <FormField
      control={control}
      name='salary'
      render={() => (
        <FormItem className=''>
          <FormLabel>Salary:</FormLabel>
          <div className='flex gap-2 items-center !m-0'>
            <FormControl>
              <Select
                value={watch('salary.type')}
                onValueChange={(e) => {
                  const value = e as 'notSpecified' | 'range' | 'fixed';
                  setValue(
                    'salary',
                    value === 'range'
                      ? { type: 'range', value: { from: 0, to: 0 } }
                      : value === 'fixed'
                        ? { type: 'fixed', value: 0 }
                        : { type: 'notSpecified', value: 'Not specified' },
                  );
                }}
              >
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder={getValues('salary.type')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='notSpecified'>Not specified</SelectItem>
                  <SelectItem value='range'>Range</SelectItem>
                  <SelectItem value='fixed'>Fixed</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <div className='flex gap-2'>
              {watch('salary.type') === 'range' && (
                <>
                  <FormField
                    control={control}
                    name='salary.value.from'
                    render={({ field }) => (
                      <FormItem className='flex gap-1 items-center '>
                        <FormLabel className='text-zinc-500'>from</FormLabel>
                        <FormControl className='!m-0'>
                          <Input
                            type='number'
                            placeholder='Min salary'
                            min={0}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={control}
                    name='salary.value.to'
                    render={({ field }) => (
                      <FormItem className='flex gap-1 items-center'>
                        <FormLabel className='text-zinc-500'>to</FormLabel>
                        <FormControl className='!m-0'>
                          <Input
                            type='number'
                            min={1}
                            placeholder='Max salary'
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
            </div>

            {watch('salary.type') === 'fixed' && (
              <FormField
                control={control}
                name='salary.value'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type='number'
                        placeholder='Salary amount'
                        value={
                          typeof field.value === 'number' ? field.value : 0
                        }
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        </FormItem>
      )}
    />
  );
};
