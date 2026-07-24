import { createBrowserRouter } from "react-router";
import MainLayOut from "./mainLayOut/MainLayOut";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import AboutUs from "./pages/aboutUS/AboutUs";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import Profile from "./pages/profile/Profile";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import ErrorPage from "./pages/error/Error";
import PathRegister from "./components/pathRegister/PathRegister";
import Cart from "./components/cart/Cart";
import ParentSingel from "./components/parentSingel/ParentSingel";
import LoginError from "./components/loginError/LoginError";
import WishList from "./components/wishList/WishList";
import Checkout from "./components/checkOut/CheckOut";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/register",
        element: (
          <PathRegister>
            <Register />
          </PathRegister>
        ),
      },
      {
        path: "/login",
        element: (
          <LoginError>
            <Login />
          </LoginError>
        ),
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/single-product/:id",
        element: (
          <ParentSingel>
            <SingleProduct />
          </ParentSingel>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishList",
        element: <WishList />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);
export default router;
