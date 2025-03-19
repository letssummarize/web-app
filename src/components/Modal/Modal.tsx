import Button from '../Button';
import Close from '../Icon/Close';

interface ModalProps {
  title: string;
  children: React.ReactNode;
  onSave: () => void;
  onClose: () => void;
}

function Modal({ title, children, onSave, onClose }: ModalProps) {
  return (
    <div className='bg-[#121212] max-w-[95%] w-[600px] p-[30px] z-50 flex flex-col gap-10 rounded-[15px] border overflow-y-auto max-h-[90vh]'>
      <div className='flex justify-between items-center border-b pb-[20px]'>
        <span>{title}</span>
        <div className='flex items-center justify-center h-[38px] w-[38px] border rounded-full'>
          <Close
            className='w-[22px] h-auto cursor-pointer'
            role='button'
            onClick={onClose}
          />
        </div>
      </div>

      {children}

      <div className='w-full flex justify-end gap-4'>
        <Button variant='outlined' radius='default' size='md' onClick={onClose}>
          Cancel
        </Button>
        <Button variant='default' radius='default' size='md' onClick={onSave}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default Modal;
