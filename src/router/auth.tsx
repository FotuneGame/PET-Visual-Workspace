import Pages from "../pages";

export const authRouters = [
    {
        path: Pages.auth.url+Pages.auth.without_params.assets.url,
        element: Pages.auth.without_params.assets.page,
    },
    {
        path: Pages.auth.url+Pages.auth.with_params.asset.url,
        element: Pages.auth.with_params.asset.page,
    },
    {
        path: Pages.auth.url+Pages.auth.without_params.files.url,
        element: Pages.auth.without_params.files.page,
    },
    {
        path: Pages.auth.url+Pages.auth.with_params.file.url,
        element: Pages.auth.with_params.file.page,
    },
    {
        path: Pages.auth.url+Pages.auth.without_params.products.url,
        element: Pages.auth.without_params.products.page,
    },
    {
        path: Pages.auth.url+Pages.auth.with_params.product.url,
        element: Pages.auth.with_params.product.page,
    },
    {
        path: Pages.auth.url+Pages.auth.without_params.projects.url,
        element: Pages.auth.without_params.projects.page,
    },
    {
        path: Pages.auth.url+Pages.auth.with_params.project.url,
        element: Pages.auth.with_params.project.page,
    },
    {
        path: Pages.auth.url+Pages.auth.without_params.teams.url,
        element: Pages.auth.without_params.teams.page,
    },
    {
        path: Pages.auth.url+Pages.auth.with_params.team.url,
        element: Pages.auth.with_params.team.page,
    },
]