import Pages from "../pages";

export const loginRouters = [
    {
        path: Pages.login.code.url,
        element: Pages.login.code.page,
    },
    {
        path: Pages.login.feedback.url,
        element: Pages.login.feedback.page,
    },
    {
        path: Pages.login.forgot.url,
        element: Pages.login.forgot.page,
    },
    {
        path: Pages.login.new_password.url,
        element: Pages.login.new_password.page,
    },
    {
        path: Pages.login.registration.url,
        element: Pages.login.registration.page,
    },
    {
        path: Pages.login.sign.url,
        element: Pages.login.sign.page,
    },
]