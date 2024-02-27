import Container from '@/components/container/Container';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getUserEmail, logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { toast } from 'sonner';
import { useContext } from 'react';
import { cn } from '@/lib/utils';
import { ThemeContext } from '@/providers/ThemeProvider';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
const navbarAnimation = {
  hidden: {
    opacity: 0,
    x: -500,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      type: 'spring',
      bounce: 0.5,
    },
  },
};

const Navbar = () => {
  const themeContext = useContext(ThemeContext);
  const dispatch = useAppDispatch();
  const email = useAppSelector(getUserEmail);
  const handleLogout = () => {
    dispatch(logout());
    toast.success('logout successfully', {
      duration: 3000,
      position: 'top-right',
    });
  };
  const handleToggle = () => {
    if (themeContext?.theme === 'light') {
      themeContext?.setTheme('dark');
    }
    if (themeContext?.theme === 'dark') {
      themeContext?.setTheme('light');
    }
  };
  return (
    <Container className={cn(`px-20 sticky top-0 z-20 shadow-xl `)}>
      <motion.header
        variants={navbarAnimation}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center py-4"
      >
        <h3 className="text-3xl font-black roboto">
          <NavLink to="/">Kabbo Charity</NavLink>
        </h3>
        <div className="space-x-5 font-medium roboto flex items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="winter-clothes">All Winter Clothes</NavLink>
          {email && <NavLink to="dashboard">Dashboard</NavLink>}

          <span onClick={handleToggle} className="cursor-pointer text-xl">
            {themeContext?.theme === 'light' ? (
              <MdOutlineDarkMode />
            ) : (
              <MdOutlineLightMode color='yellow'/>
            )}
          </span>
          {!email && <NavLink to="login">login</NavLink>}
          {email && (
            <NavLink onClick={handleLogout} to="/">
              Logout
            </NavLink>
          )}
        </div>
      </motion.header>
    </Container>
  );
};

export default Navbar;
