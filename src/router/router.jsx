import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import RegisterProduct from "../pages/RegisterProduct/index";
import GetProducts from "../pages/GetProducts/index";
import DeleteProduct from "../pages/DeleteProduct/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registerProduct",
    element: <RegisterProduct />,
  },
  {
    path: "/getAllProducts",
    element: <GetProducts />,
  },
  {
    path: "/deleteProduct",
    element: <DeleteProduct />,
  },
]);

export default router;
