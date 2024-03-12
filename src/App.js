import React, { Suspense, lazy } from "react";
import ReactDOM  from "react-dom/client";
import '../index.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Error from "./components/Error";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import ResturantMenu from "./components/ResturantMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
// import Instamart from "./components/Instamart";
const Instamart = lazy(()=> import("./components/Instamart"));
const About = lazy(()=> import("./components/About"));

const AppLayout = () =>{
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    );
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
                {
                    path: "/about",
                    element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                    ),
                    children: [
                        {
                            path: "profile",
                            element: <Profile />
                        }
                    ]
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/restaurant/:resId",
                    element: <ResturantMenu />
                },
                {
                    path: "instamart",
                    element: (
                    <Suspense fallback={<Shimmer />}>
                        <Instamart />
                    </Suspense>
                    )
                }
            ]
    }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);