import { cn } from '@/lib/utils';
import { useState } from 'react';

export const ExpandableNote = ({ text }: { text?: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <div className='relative w-full bg-white rounded-sm p-2'>
      <div
        className={cn(
          'cursor-pointer overflow-hidden transition-all duration-300 relative',
          isExpanded ? 'max-h-96' : 'max-h-10',
        )}
        onClick={toggleExpand}
      >
        <div className='break-words'>{text}</div>
        {!isExpanded && (
          <div className='rounded-sm absolute inset-0 bg-black/80 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity'>
            Open
          </div>
        )}
      </div>
    </div>
  );
};
