import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home.tsx";
import "./App.css";

// Loads the page and every polyfill file in parallel, only when it is first rendered.
const OpenConsole = lazy(async () => {
  const polyfills = import.meta.glob("./polyfills/*.js");
  const [page] = await Promise.all([
    import("./pages/OpenConsole.tsx"),
    ...Object.values(polyfills).map((load) => load()),
  ]);
  return page;
});

const AccordionPage = lazy(() => import("./pages/AccordionPage.tsx"));
const DebouncePage = lazy(() => import("./pages/DebouncePage.tsx"));
const TabPage = lazy(()=>import("./pages/TabPage.tsx"));
const SearchPage = lazy(()=>import("./pages/SearchPage.tsx"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/accordion", element: <AccordionPage /> },
  { path: "/polyfill", element: <OpenConsole /> },
  { path: "/debounce", element: <DebouncePage /> },
  {path:"/tab" , element: <TabPage/>},
  {path:"/search" , element:<SearchPage/>}
]);

function App() {
  // One Suspense boundary covers every lazy route.
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
