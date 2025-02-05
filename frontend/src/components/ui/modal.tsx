import { FC, PropsWithChildren } from 'react';
import { Dialog, DialogContent, DialogDescription } from '../ui/dialog';
import { cn } from '@/lib/utils';
import { DialogTitle } from '@radix-ui/react-dialog';

interface IProps {
  open: boolean;
  className?: string;
  handleOpen: () => void;
}

export const Modal: FC<PropsWithChildren<IProps>> = ({
  open,
  className,
  children,
  handleOpen,
}) => {
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent
        className={cn(
          'p-8  max-w-[600px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}
      >
        <DialogTitle className='hidden' />
        <DialogDescription className='hidden' />
        {children}
      </DialogContent>
    </Dialog>
  );
};
