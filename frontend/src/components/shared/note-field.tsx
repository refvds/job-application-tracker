import { ChangeEvent, useState } from 'react';
import { ControlledField } from './controlled-field';
import { Textarea } from '../ui/textarea';
import { useFormContext } from 'react-hook-form';

const MAX_LENGTH = 300;

export const NoteField = () => {
  const { getValues, setValue, watch } = useFormContext();
  const initialNoteLength = getValues('note')?.length || 0;
  const [currentLength, setCurrentLength] = useState(initialNoteLength);

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentLength(e.target.value.length);
    setValue('note', e.target.value);
  };

  return (
    <ControlledField
      fieldName='note'
      label='Note'
      renderInput={() => (
        <div className='relative'>
          <Textarea
            className='w-full h-full resize-none'
            value={watch('note')}
            onChange={(value) => handleInput(value)}
            maxLength={MAX_LENGTH}
            rows={6}
          />
          <span className='absolute right-1 bottom-0 -mt-3 text-xs'>
            {currentLength} / {MAX_LENGTH}
          </span>
        </div>
      )}
    />
  );
};
