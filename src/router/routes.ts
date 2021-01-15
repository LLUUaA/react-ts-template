import lazyLoad from "./lazyLoad";
import { RouteProps } from "react-router-dom";

const HomeRoute = lazyLoad(() => import("../views/home/home"));
const AboutRoute = lazyLoad(() => import("../views/about/about"));
const NotfoundRoute = lazyLoad(() => import("../views/notFound/notFound"));

const Routes: RouteProps[] = [
    {
        path: "/",
        exact: true,
        component: HomeRoute,
    },
    {
        path: "/home",
        component: HomeRoute,
    },
    {
        path: "/about",
        component: AboutRoute,
    },
    {
        path: "*",
        component: NotfoundRoute,
    },
];

export default Routes