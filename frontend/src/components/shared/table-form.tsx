import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { RecordInputs, recordSchema, Salary } from '@/schemas/form.schema';
import { ControlledField } from './controlled-field';
import { Input } from '../ui/input';
import { SalaryField } from './salary-field';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { TableStatus } from '@/constants/status';
import { NoteField } from './note-field';
import { Button } from '../ui/button';
import { IRecord } from '../types/record';

export const TableForm = ({
  initialData,
  closeForm,
}: {
  initialData?: Array<IRecord>;
  closeForm: () => void;
}) => {
  const form = useForm<RecordInputs>({
    resolver: zodResolver(recordSchema),
    defaultValues: {
      company: '',
      position: '',
      salary: {
        type: 'notSpecified',
        value: 'Not specified',
      } as Salary,
      status: {
        type: 'submitted',
        value: 'Submitted',
      },
      note: '',
    },
  });

  const onSubmit = (data: RecordInputs) => {
    console.log(data);
    closeForm();
  };

  return (
    <FormProvider {...form}>
      <form
        className='flex flex-col gap-4'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <ControlledField
          className='mt-4'
          fieldName='company'
          label='Company'
          renderInput={(field) => <Input {...field} />}
        />

        <ControlledField
          fieldName='position'
          label='Position'
          renderInput={(field) => <Input {...field} />}
        />

        <SalaryField />
        <ControlledField
          fieldName='status'
          label='Status'
          renderInput={() => (
            <Select
              onValueChange={(e) => {
                const selectedStatus = TableStatus.find(
                  (status) => status.value === e,
                );
                form.setValue('status', {
                  type: selectedStatus?.type || '',
                  value: e,
                });
              }}
              value={form.watch('status.value')}
            >
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder={form.getValues('status.value')} />
              </SelectTrigger>
              <SelectContent>
                {TableStatus.map((status) => (
                  <SelectItem key={status.type} value={status.value}>
                    {status.value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        <NoteField />
        <div className='flex gap-3 w-full'>
          <Button type='submit' className='w-full'>
            {initialData ? 'Update fields' : 'Create'}
          </Button>
          <Button
            className='w-full'
            type='reset'
            onClick={() => form.reset(undefined)}
          >
            Reset
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
