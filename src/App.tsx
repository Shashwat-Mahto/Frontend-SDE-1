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

const Accordion = lazy(() => import("./pages/Accordion.tsx"));
const Debounce = lazy(()=> import("./pages/Debounce.tsx"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/accordion", element: <Accordion /> },
  { path: "/polyfill", element: <OpenConsole /> },
  {path:"/debounce" , element:<Debounce/>}
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
