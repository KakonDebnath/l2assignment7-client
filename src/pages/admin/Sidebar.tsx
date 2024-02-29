import { cn } from '@/lib/utils';
import { getUserEmail, logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { LuLogOut, LuLayoutDashboard } from 'react-icons/lu';
import {
  MdOutlineAddModerator,
  MdOutlineAddShoppingCart,
  MdOutlineLeaderboard,
  MdOutlinePostAdd,
  MdOutlineSportsKabaddi,
} from 'react-icons/md';
import { BiDonateHeart } from 'react-icons/bi';
import { GiClothes } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import { toast } from 'sonner';

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const email = useAppSelector(getUserEmail);
  const handleLogout = () => {
    dispatch(logout());
    toast.success('logout successfully', {
      duration: 3000,
      position: 'top-right',
    });
  };
  return (
    <aside className="bg-light-gray col-span-2 h-screen sticky top-0 left-0 overflow-auto px-3">
      <h3 className="text-3xl font-black roboto text-center py-5 text-primary">
        <NavLink to="/">Kabbo Charity</NavLink>
      </h3>
      <div className="flex flex-col items-center gap-4 mb-5 text-center">
        <h3 className="text-2xl ">Welcome Back</h3>
        <p>{email}</p>
      </div>
      <nav className="flex flex-col gap-1">
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/dashboard"
        >
          <LuLayoutDashboard className="shrink-0" />
          <span className="truncate">Dashboard</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/dashboard/winter-clothes"
        >
          <GiClothes className="shrink-0" />
          <span>All Winter Clothes</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/dashboard/create-winter-clothes"
        >
          <MdOutlineAddShoppingCart className="shrink-0" />
          <span>Create Clothes</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/dashboard/donate-now"
        >
          <BiDonateHeart className="shrink-0" />
          <span>Donate Now</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/dashboard/leader-board"
        >
          <MdOutlineLeaderboard className="shrink-0" />
          <span>Leader Board</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/dashboard/create-testimonial"
        >
          <MdOutlineAddModerator className="shrink-0" />
          <span>Add Testimonial</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/dashboard/signup-volunteer"
        >
          <MdOutlineSportsKabaddi className="shrink-0" />
          <span>Sign Up Volunteer</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/dashboard/add-community"
        >
          <MdOutlinePostAdd className="shrink-0" />
          <span>Add Community</span>
        </NavLink>
        <NavLink
          onClick={handleLogout}
          className={({ isActive }) =>
            cn(
              'px-3 bg-gray py-2 capitalize rounded-md transition-all duration-300 flex items-center gap-2 mt-5',
              {
                'bg-dark-gray text-light-gray font-semibold': isActive,
              }
            )
          }
          to="/"
        >
          <LuLogOut className="shrink-0" />
          <span>Logout</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
