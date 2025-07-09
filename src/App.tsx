import { 
  createBrowserRouter, 
  Outlet, 
  RouterProvider, 
  useLocation,
  useNavigationState,
  useNavigation
} from "react-router-dom"; 
import { 
  About, 
  CarDetails, 
  Contact, 
  Home, 
  ProductDetails, 
  SearchPage, 
} from "./pages/pageIndex"; 
import { useEffect, useRef, useState } from "react"; 
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 
import Lenis from "@studio-freight/lenis";
import Preloader from "./components/Preloader"; // Import your Preloader

function App() {
  const Layout = () => {
    const { pathname } = useLocation();
    const navigation = useNavigation();
    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const lenisRef = useRef(null);

    // Initialize Lenis smooth scrolling
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

    // Scroll to top on route change and handle initial load
    useEffect(() => {
      window.scrollTo(0, 0);
      
      if (isInitialLoad) {
        const timer = setTimeout(() => {
          setIsInitialLoad(false);
        }, 2000); // Match this duration with your Preloader's animation time
        return () => clearTimeout(timer);
      }
    }, [pathname]);

    // Show preloader during initial load or route transitions
    const showPreloader = isInitialLoad || navigation.state === "loading";

    return (
      <>
        {showPreloader && <Preloader />}
        <Navbar />
        <Outlet />
        <Footer />
      </>
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
          element: <ProductDetails />
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;