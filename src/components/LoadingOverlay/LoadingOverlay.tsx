import { Box, CircularProgress, CircularProgressProps, Typography } from '@mui/material';

interface LoadingOverlayProps {
  showText?: boolean;
  size?: string | number;
  color?: CircularProgressProps['color'];
}

export function LoadingOverlay({ showText = true, size = 40, color = 'primary' }: LoadingOverlayProps) {
  return (
    <Box className="flex flex-col items-center justify-center">
      <CircularProgress size={size} color={color} />
      {showText && (
        <Typography component="p" variant="body1" className="mt-4 text-sm font-medium" color={color}>
          Loading...
        </Typography>
      )}
    </Box>
  );
}
