import AboutUs from "../pages/AboutUs/AboutUs";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Team from "../pages/Team/Team";

//Create public Route
const publicRoute = [
    {
       path: "/",
       element: <Home />,
    },
    {
       path: "/about",
       element: <AboutUs />,
    },
    {
       path: "/team",
       element: <Team />,
    },
    {
       path: "/blog",
       element: <Blog />,
    },
    {
       path: "/contact",
       element: <Contact />,
    },
];

//export public route
export default publicRoute;