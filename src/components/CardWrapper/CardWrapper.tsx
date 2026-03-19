import { Typography } from '@mui/material';
import type { ReactNode } from 'react';

interface CardWrapperProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

export function CardWrapper({ title = '', className = '', children }: CardWrapperProps) {
  return (
    <div className={`border-secondary-dark bg-secondary rounded-lg border p-4 ${className}`}>
      {title && (
        <Typography variant="subtitle1" component="h4" className="mb-2 text-neutral-400">
          {title}
        </Typography>
      )}

      {children}
    </div>
  );
}
