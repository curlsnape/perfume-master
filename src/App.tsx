import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import {
  About,
  CarDetails,
  Contact,
  Home,
  ProductDetails,
  SearchPage,
} from "./pages/pageIndex";
import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";

function App() {
  const Layout = () => {
    const { pathname } = useLocation();

    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
      const lenis = new Lenis({
        duration: 1.2,
        smooth: true,
        smoothTouch: false,
      });

      lenisRef.current = lenis;

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
      <div className="md:pb-0 pb-8">
        <Navbar />
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/search",
          element: <SearchPage />,
        },
        {
          path: "/search/:productid",
          element: <ProductDetails  />
        }
        // {
        //   path: "/search/:carid/:carname",
        //   element: <CarDetails />,
        // },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
