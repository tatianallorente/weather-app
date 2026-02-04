import { AppBar, Divider, Typography } from '@mui/material';
import { DRAWER_WIDTH, NAVBAR_HEIGTH } from '@/common/constants';

export function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        className="flex flex-row items-center gap-2 px-5 py-2.5"
        sx={{
          minHeight: NAVBAR_HEIGTH,
          width: `calc(100% - ${DRAWER_WIDTH})`,
          marginLeft: DRAWER_WIDTH,
        }}
      >
        <Typography variant="h6" component="h1" className="text-white">
          Weather App
        </Typography>
      </AppBar>
      <Divider />
    </>
  );
}
