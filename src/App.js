import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";


const AppMain = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: < AppMain />,
        children: [
            {
                path: "/",
                element: <Body />,
            }, {
                path: "aboutus",
                element: <AboutUs />,
            },
            {
                path: "contact",
                element: <ContactUs />,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />,
            },],

        errorElement: <Error />
    },

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);