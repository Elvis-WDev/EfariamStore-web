
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
// import { Home, Product, Products } from "./pages";
import { Footer, Navbar } from "./components";
import "./assets/styles/App.scss"
import { Home, Products, Product } from "./pages";

const Layout = () => {
  return (
    <div className="app">

      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ]
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )

}

export default App
