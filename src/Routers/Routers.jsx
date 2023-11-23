import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/HomePage/Home";

import Login from "../Pages/Login/Login";
import AddBrands from "../Components/Brands/AddBrands.";
import ProductPage from "../Pages/ProductsPage/ProductPage";
import ProductDetail from "../Pages/ProductsPage/ProductDetail";
import CartDetails from "../Pages/AddToCart/CartDetails";
import AddProducts from "../Pages/AddProducts/AddProducts";
import SignUp from "../Pages/SignUp/SignUp";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";
import ProtectedRoute2 from "../Components/ProtectedRoute/ProtectedRoute2";
import UpdateAddProducts from "../Pages/AddProducts/UpdateAddProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/brands"
          ),
      },
      {
        path: "/addproducts",
        element: (
          <ProtectedRoute>
            <AddProducts />
          </ProtectedRoute>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateAddProducts />,
        loader: ({ params }) =>
          fetch(
            `https://b8a10-brandshop-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/addproducts/${params.id}`
          ),
      },
      {
        path: "/login",
        element: (
          <ProtectedRoute2>
            <Login />
          </ProtectedRoute2>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoute2>
            <SignUp />
          </ProtectedRoute2>
        ),
      },
      {
        path: "/addbrands",
        element: <AddBrands />,
      },
      {
        path: "/brands/:id",
        element: (
          <ProtectedRoute>
            <ProductPage />
          </ProtectedRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/addproducts"
          ),
      },
      {
        path: "/productdetails/:id",
        element: (
          <ProtectedRoute>
            <ProductDetail />
          </ProtectedRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/addproducts"
          ),
      },
      {
        path: "/cartdetails",
        element: (
          <ProtectedRoute>
            <CartDetails />
          </ProtectedRoute>
        ),
        loader: () =>
          fetch(
            "https://b8a10-brandshop-server-side-md-zahidul-islam15-mdzahidulislam15.vercel.app/carts"
          ),
      },
    ],
  },
]);

export default router;
