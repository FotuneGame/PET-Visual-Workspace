import React from 'react';

import Private from './auth/Private';

const About = React.lazy(()=>import("./all/about"));
const Community = React.lazy(()=>import("./all/community"));
const Main = React.lazy(()=>import("./all/main"));
const Pricing = React.lazy(()=>import("./all/pricing"));

const Assets = React.lazy(()=>import("./auth/assets"));
const Asset = React.lazy(()=>import("./auth/assets/[id_hash]"));
const Files = React.lazy(()=>import("./auth/files"));
const File = React.lazy(()=>import("./auth/files/[id_hash]"));
const Products = React.lazy(()=>import("./auth/products"));
const Product = React.lazy(()=>import("./auth/products/[id_hash]"));
const Projects = React.lazy(()=>import("./auth/projects"));
const Project = React.lazy(()=>import("./auth/projects/[id_hash]"));
const Teams = React.lazy(()=>import("./auth/team"));
const Team = React.lazy(()=>import("./auth/team/[id_hash]"));

const Code = React.lazy(()=>import("./login/code"));
const Feedback = React.lazy(()=>import("./login/feedback"));
const Forgot = React.lazy(()=>import("./login/forgot"));
const NewPassword = React.lazy(()=>import("./login/new_password"));
const Registration = React.lazy(()=>import("./login/registration"));
const Sign = React.lazy(()=>import("./login/sign"));

const Pages = {
    all:{
        about:{
            page: <About />,
            url:"/about"
        },
        community:{
            page: <Community />,
            url:"/community"
        },
        main:{
            page: <Main />,
            url:"/"
        },
        pricing:{
            page: <Pricing />,
            url:"/pricing"
        },
    },
    auth:{
        page: <Private />,
        url: "/auth",
        with_params:{
            asset:{
                page: <Asset />,
                url:"/asset/:id_hash"
            },
            file:{
                page: <File />,
                url:"/file/:id_hash"
            },
            product:{
                page: <Product />,
                url:"/product/:id_hash"
            },
            project:{
                page: <Project />,
                url:"/project/:id_hash"
            },
            team:{
                page: <Team />,
                url:"/team/:id_hash"
            }
        },
        without_params:{
            assets:{
                page: <Assets  />,
                url:"/assets"
            },
            files:{
                page: <Files  />,
                url:"/files"
            },
            products:{
                page: <Products  />,
                url:"/products"
            },
            projects:{
                page: <Projects  />,
                url:"/projects"
            },
            teams:{
                page: <Teams  />,
                url:"/teams"
            }
        }
    },
    login:{
        code:{
            page: <Code  />,
            url:"/code"
        },
        feedback:{
            page: <Feedback  />,
            url:"/feedback"
        },
        forgot:{
            page: <Forgot  />,
            url:"/forgot"
        },
        new_password:{
            page: <NewPassword  />,
            url:"/new_password"
        },
        registration:{
            page: <Registration  />,
            url:"/registration"
        },
        sign:{
            page: <Sign  />,
            url:"/sign"
        }
    }
}

export default Pages;