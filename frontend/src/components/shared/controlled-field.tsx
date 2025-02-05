import { FC, ReactNode } from 'react';
import {
  ControllerRenderProps,
  FieldValues,
  useFormContext,
} from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { cn } from '@/lib/utils';

interface ControlledFieldProps {
  fieldName: string;
  className?: string;
  label?: string;
  renderInput: (field: ControllerRenderProps<FieldValues, string>) => ReactNode;
}

export const ControlledField: FC<ControlledFieldProps> = ({
  fieldName,
  label,
  className,
  renderInput,
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      name={fieldName}
      control={control}
      render={({ field }) => (
        <FormItem className={cn(label && 'flex flex-col', className)}>
          {label && <FormLabel className='m-0'>{label}:</FormLabel>}
          <FormControl>{renderInput(field)}</FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
