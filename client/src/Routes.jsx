import { createBrowserRouter } from "react-router-dom";

import { Home, About, Profile, Signin, Signup } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
]);

export default router;
