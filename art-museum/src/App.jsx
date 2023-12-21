import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "galleries/:galleryId",
        element: <GalleryView galleries={harvardArt.records} />,
      },
      {
        path: "/",
        element: (
          <>
            <h2>Harvard Art Museum</h2>
            <p>
              Look, but Don&apos;t Touch. Please select a Gallery in the
              navigation bar.
            </p>
          </>
        ),
      },
      {
        path: "*",
        element: <h2>Page Not Found</h2>,
      },
    ],
  },
]);

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  // console.log(harvardArt);
  return <RouterProvider router={router} />;
}

export default App;
