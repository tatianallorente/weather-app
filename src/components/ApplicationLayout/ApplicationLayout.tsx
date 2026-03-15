import { Outlet } from 'react-router';
import { DRAWER_WIDTH } from '@/common/constants';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';

export function ApplicationLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />
      <Sidebar />
      <main className="flex flex-1 flex-col bg-teal-50 px-4 py-4" style={{ marginLeft: DRAWER_WIDTH }}>
        <Outlet />
      </main>
    </div>
  );
}
