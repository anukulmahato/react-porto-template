import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout/Layout";
import privateRoute from "./privateRoute";
import publicRoute from "./publicRoute";

//create browser router
const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [...publicRoute, ...privateRoute],
    },
]);

//export router
export default router;