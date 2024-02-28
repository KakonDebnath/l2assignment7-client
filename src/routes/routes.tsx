import App from '@/App';
import AdminLayout from '@/components/layouts/adminLayout/AdminLayout';
import ErrorPage from '@/pages/ErrorPage/ErrorPage';
import About from '@/pages/about/About';
import AdminDashboard from '@/pages/admin/AdminDashboard';
import AddCommunity from '@/pages/admin/addCommunity/AddCommunity';
import AddTestimonial from '@/pages/admin/addtestimonial/AddTestimonial';
import AllWinterClothes from '@/pages/admin/allWinterClothes/AllWinterClothes';
import CreateClothes from '@/pages/admin/createClothes/CreateClothes';
import DonateNow from '@/pages/admin/donateNow/DonateNow';
import LeaderBoard from '@/pages/admin/leaderBoard/LeaderBoard';
import AddVolunteer from '@/pages/admin/volunteer/AddVolunteer';
import CommunityPage from '@/pages/community/CommunityPage';
import Home from '@/pages/home/Home';
import Login from '@/pages/login/Login';
import Register from '@/pages/login/Register';
import WinterClothes from '@/pages/winterClothes/WinterClothes';
import WinterClothesDetailPage from '@/pages/winterClothesDetails/WinterClothesDetailPage';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'winter-clothes',
        element: <WinterClothes />,
      },
      {
        path: 'winter-clothes/:id',
        element: <WinterClothesDetailPage />,
      },
      {
        path: 'about-us',
        element: <About />,
      },
      {
        path: 'community',
        element: <CommunityPage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },
      {
        path: 'winter-clothes',
        element: <AllWinterClothes />,
      },
      {
        path: 'create-winter-clothes',
        element: <CreateClothes />,
      },
      {
        path: 'donate-now',
        element: <DonateNow />,
      },
      {
        path: 'leader-board',
        element: <LeaderBoard/>,
      },
      {
        path: 'create-testimonial',
        element: <AddTestimonial/>,
      },
      {
        path: 'signup-volunteer',
        element: <AddVolunteer/>,
      },
      {
        path: 'add-community',
        element: <AddCommunity/>,
      },
    ],
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  // {
  //   path: '/register',
  //   element: <Register />,
  // },
]);
export default router;
