import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Grocery from "./components/Grocery";
import Shimmer from "./components/Shimmer";

// Import About lazily
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet /> {/* Replaced by Body or About or Contact or Error */}
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [//children routes so that header intact
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: (
                    <Suspense fallback={<Shimmer />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Grocery />
            },
            {
                path: "/restaurant/:resId",//dynamic path using resId
                element: <RestaurantMenu />,
            }
        ],
        errorElement: <Error />
    },
    // { 
    //     path:"/about",
    //     element: <About/>,
    // },
    // { 
    //     path:"/contact",
    //     element: <Contact/>,
    // }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);