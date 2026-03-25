import { AppBar, Divider, Typography } from '@mui/material';
import { DRAWER_TRANSITION, DRAWER_WIDTH, DRAWER_WIDTH_COLLAPSED, NAVBAR_HEIGTH } from '@/common/constants';

export function Navbar() {
  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        className="flex flex-row items-center gap-2 px-5 py-2.5"
        sx={{
          minHeight: NAVBAR_HEIGTH,
          width: {
            xs: `calc(100% - ${DRAWER_WIDTH_COLLAPSED})`,
            md: `calc(100% - ${DRAWER_WIDTH})`,
          },
          marginLeft: {
            xs: DRAWER_WIDTH_COLLAPSED,
            md: DRAWER_WIDTH,
          },
          transition: `width ${DRAWER_TRANSITION}, margin-left ${DRAWER_TRANSITION}`,
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
