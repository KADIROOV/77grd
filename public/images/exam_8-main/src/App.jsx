import { About, Home, Recipe, Recipes, Create } from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
        {
          path: "recipe/:id",
          element: <Recipe />,
        },
        {
          path: "/create",
          element: <Create />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
