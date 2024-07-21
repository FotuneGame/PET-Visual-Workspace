import { createBrowserRouter,RouteObject } from "react-router-dom";
import { authRouters } from "./auth";
import { loginRouters } from "./login";
import NotFound from "@components/layout/NotFound";
import App from "@/App";
import Pages from "@pages";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
            path: Pages.all.main.url,
            element: Pages.all.main.page,
            },
           {
            path: Pages.all.about.url,
            element: Pages.all.about.page,
           },
           {
            path: Pages.all.community.url,
            element: Pages.all.community.page,
           },
           {
            path: Pages.all.pricing.url,
            element: Pages.all.pricing.page,
           },
           ...authRouters,
           ...loginRouters,
        ]
    },
]

export const router = createBrowserRouter(routes);