import Sidebar from '@/pages/admin/Sidebar';
import { Outlet } from 'react-router-dom';
import PrivateRoute from '../privateRoute/PrivateRoute';

const AdminLayout = () => {
  return (
    <PrivateRoute>
      <div className="grid grid-cols-12">
        <Sidebar />
        <div className="col-span-10 h-full">
          <Outlet />
        </div>
      </div>
    </PrivateRoute>
  );
};

export default AdminLayout;
