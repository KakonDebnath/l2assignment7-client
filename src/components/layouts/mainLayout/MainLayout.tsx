import Navbar from '@/components/layouts/mainLayout/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Container from '@/components/container/Container';

const MainLayout = () => {
  const location = useLocation();
  const noFooter = location.pathname.includes("/login") || location.pathname.includes("/register");
  return (
    <Container>
      <Navbar />
      <Outlet />
      {
        !noFooter && <Footer />
      }
    </Container>
  );
};

export default MainLayout;
