// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Sigin from "./Components/Createaccount";
import Account, { action as Accountaction } from "./Components/Account";
import Signin from "./Components/Signin";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Welcome />,
    },
    {
      path: "/signin",
      element: <Sigin />,
    },
    {
      path: "/account",
      element: <Account />,
      action: Accountaction,
    },
    {
      path: "/login",
      element: <Signin />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
