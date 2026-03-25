import Box from '@mui/material/Box';
import { Outlet } from 'react-router';
import { DRAWER_TRANSITION, DRAWER_WIDTH, DRAWER_WIDTH_COLLAPSED } from '@/common/constants';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';

export function ApplicationLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />
      <Sidebar />
      <Box
        component="main"
        className="flex flex-1 flex-col bg-teal-50 px-6 py-6"
        sx={{
          marginLeft: {
            xs: DRAWER_WIDTH_COLLAPSED,
            md: DRAWER_WIDTH,
          },
          transition: ` margin-left ${DRAWER_TRANSITION}`,
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
}
