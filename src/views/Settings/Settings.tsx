import { Box, TextField, ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { CardWrapper } from '@/components';
import { SETTINGS } from './Settings.constants';

export function Settings() {
  return (
    <CardWrapper title="SETTINGS" className="flex-1">
      {/* Search city */}
      <Box className="mb-4">
        <Typography variant="subtitle1" component="h4" className="mb-2 text-neutral-400">
          City
        </Typography>
        <TextField
          value="madrid"
          // TODO: onChange
          placeholder="e.g. madrid, london, tokyo"
          size="small"
          fullWidth
          className="w-xs"
          disabled
        />
      </Box>

      {SETTINGS.map(({ key, title, options }) => (
        <Box key={key} className="mb-4">
          <Typography variant="subtitle1" component="h4" className="mb-1 text-neutral-400">
            {title}
          </Typography>
          <ToggleButtonGroup
            value=""
            // TODO: onChange
            exclusive
            color="primary"
            size="small"
            fullWidth
            className="w-xs"
          >
            {options.map(({ value, label }) => (
              <ToggleButton key={value} value={value} disabled>
                {label}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>
      ))}
    </CardWrapper>
  );
}
