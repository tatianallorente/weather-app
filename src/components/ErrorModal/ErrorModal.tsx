import { Button, Dialog, DialogActions, DialogContent, IconButton, Typography } from '@mui/material';
import { X, XCircle } from 'lucide-react';
import { useGlobalContext } from '@/store';

export function ErrorModal() {
  const { errorModal, closeErrorModal } = useGlobalContext();

  return (
    <Dialog
      open={errorModal.show}
      onClose={closeErrorModal}
      slotProps={{
        paper: {
          className: 'rounded-2xl shadow-xl max-w-xl max-h-[40vh] min-w-xs',
        },
      }}
    >
      <DialogContent className="relative flex min-h-56 flex-col items-center justify-start overflow-hidden p-6 pt-8 pb-2 text-center">
        <IconButton
          onClick={closeErrorModal}
          className="absolute top-3 right-3 rounded-full border border-transparent text-neutral-800 hover:bg-neutral-100"
        >
          <X size={20} />
        </IconButton>
        {/* Error icon */}
        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <XCircle className="text-red-800" size={32} strokeWidth={1} />
          </div>
        </div>
        <div className="mt-2 max-h-[40vh] overflow-y-auto">
          <Typography className="text-2xl font-bold">{errorModal?.title || 'Error'}</Typography>
          {Array.isArray(errorModal?.message) ? (
            <ul className="m-2 list-disc pl-5 text-left text-lg text-slate-800">
              {errorModal.message.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          ) : (
            <Typography className="mt-1 text-lg text-slate-800">
              {errorModal?.message || 'Something went wrong'}
            </Typography>
          )}
        </div>
      </DialogContent>
      {/* Button bar */}
      <DialogActions className="p-0">
        <Button
          onClick={closeErrorModal}
          fullWidth
          className="cta-hover bg-primary hover:bg-primary/80 ml-0 h-12 rounded-none rounded-b-2xl py-3 font-semibold text-white"
        >
          Accept
        </Button>
      </DialogActions>
    </Dialog>
  );
}
