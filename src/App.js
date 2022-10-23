
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Home from './Components/Home/Home';
import BookingPlaces from './Components/BookingPlaces/BookingPlaces';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Hotels from './Components/Hotels/Hotels';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
   element: <Main></Main>,
   children: [
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('https://travel-guru-server-teal.vercel.app/destinations')
    },
    {
      path: '/home',
      element: <Home></Home>,
      loader: () => fetch('https://travel-guru-server-teal.vercel.app/destinations')
    },
    {
      path: '/booking/:id',
      element: <BookingPlaces></BookingPlaces>,
      loader: ({params}) => fetch(`https://travel-guru-server-teal.vercel.app/destinations/${params.id}`)
    },
    {
      path: '/login',
      element: <Login></Login>,
    },
    {
      path: '/signup',
      element: <Signup></Signup>,
    },
    {
      path: '/hotels',
      element: <PrivateRoute><Hotels></Hotels></PrivateRoute>,
      loader: () => fetch('https://travel-guru-server-teal.vercel.app/hotels')
    },
   ]
}
])
function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
