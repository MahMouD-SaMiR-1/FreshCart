import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Productes from "./components/Productes/Productes";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import Login from "./components/Login/Login";
import Regestier from "./components/Regestier/Regestier";
import Notfound from "./components/Notfound/Notfound";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import NameContextProvider from "./components/context/NameContext";
import ProtectedComponent from "./components/ProtectedComponent/ProtectedComponent";
import ProtectedUser from "./components/ProtectedUser/ProtectedUser";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CartContextProvider from "./components/context/CartContext";
import { Toaster } from "react-hot-toast";
import WishlistContextProvider from "./components/context/WishlistContext";
import Wishlist from "./components/Wishlist/Wishlist";
import CheckOut from "./components/CheckOut/CheckOut";
import AllOrders from "./components/AllOrders/AllOrders";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import EnterNewPassword from "./components/EnterNewPassword/EnterNewPassword";

function App() {
  let routers = createBrowserRouter([
		{
			path: "FreshCart/",
			element: <Layout />,
			children: [
				{
					index: true,
					element: (
						<ProtectedComponent>
							<Home />
						</ProtectedComponent>
					),
				},
				{
					path: "FreshCart/cart",
					element: (
						<ProtectedComponent>
							<Cart />
						</ProtectedComponent>
					),
				},
				{
					path: "FreshCart/checkout/:id",
					element: (
						<ProtectedComponent>
							<CheckOut />
						</ProtectedComponent>
					),
				},
				{
					path: "FreshCart/allorders",
					element: (
						<ProtectedComponent>
							<AllOrders />
						</ProtectedComponent>
					),
				},
				{
					path: "FreshCart/wishlist",
					element: (
						<ProtectedComponent>
							<Wishlist />
						</ProtectedComponent>
					),
				},
				{
					path: "FreshCart/products",
					element: (
						<ProtectedComponent>
							<Productes />
						</ProtectedComponent>
					),
				},
				{
					path: "FreshCart/categories",
					element: (
						<ProtectedComponent>
							<Categories />
						</ProtectedComponent>
					),
				},
				{
					path: "brands",
					element: (
						<ProtectedComponent>
							<Brands />
						</ProtectedComponent>
					),
				},
				{
					path: "FreshCart/login",
					element: (
						<ProtectedUser>
							<Login />
						</ProtectedUser>
					),
				},
				{
					path: "FreshCart/register",
					element: (
						<ProtectedUser>
							<Regestier />
						</ProtectedUser>
					),
				},
				{
					path: "FreshCart/forgetpassword",
					element: (
						<ProtectedUser>
							<ForgetPassword />
						</ProtectedUser>
					),
				},
				{
					path: "FreshCart/resetpassword",
					element: (
						<ProtectedUser>
							<ResetPassword />
						</ProtectedUser>
					),
				},
				{
					path: "FreshCart/enternewpassword",
					element: (
						<ProtectedUser>
							<EnterNewPassword />
						</ProtectedUser>
					),
				},
				{
					path: "FreshCart/details/:id",
					element: (
						<ProductDetails>
							<ProductDetails />
						</ProductDetails>
					),
				},
				{
					path: "FreshCart/products/details/:id",
					element: (
						<ProductDetails>
							<ProductDetails />
						</ProductDetails>
					),
				},
				{ path: "*", element: <Notfound /> },
			],
		},
	]);

  return (
    <>
      <CartContextProvider>
        <WishlistContextProvider>
          <NameContextProvider>
            <RouterProvider router={routers}></RouterProvider>
            <Toaster />
          </NameContextProvider>
        </WishlistContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
