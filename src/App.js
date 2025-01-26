import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import AppLayout from "./components/app-layout/AppLayout";
import Dashboard from "./components/dash-board/Dashboard";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <ProtectRoute>
  //         <AppLayout />
  //       </ProtectRoute>
  //     ),
  //     children: [
  //       {
  //         path: "",
  //         element: <ProductCarts />,
  //       },
  //       { path: "product-detail/:product_id", element: <ProductDetail /> }
  //     ],
  //     errorElement: <PageNotFound />,
  //   },]);

  return (
    <>
      <AppLayout/>
      <Dashboard/>
    </>
  );
}

export default App;
