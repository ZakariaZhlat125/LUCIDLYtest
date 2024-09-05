import { useRoutes } from "react-router-dom";
import HomePage from "../pages";


export default function AppRouter() {

    const publicRoutes = [
        {
            path: '/',
            element: <HomePage />,
            index: true,
            state: { from: location }
        }
    ];

    const routes = useRoutes([...publicRoutes]);
    return routes;

}