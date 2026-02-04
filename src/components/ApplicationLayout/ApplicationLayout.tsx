import { Outlet } from 'react-router';
import { DRAWER_WIDTH } from '@/common/constants';
import { Navbar } from '../Navbar';
import { Sidebar } from '../Sidebar';

export function ApplicationLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />
      <Sidebar />
      <main className="flex flex-1 flex-col bg-neutral-100 px-4 py-4" style={{ marginLeft: DRAWER_WIDTH }}>
        <div className="flex-1 overflow-auto rounded-lg border border-neutral-200 bg-white p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
