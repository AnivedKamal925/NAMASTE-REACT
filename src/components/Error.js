import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError(); // gets the error from React Router

    console.error(error); // for debugging in console

    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>{error.statusText || error.message}</p> {/* ✅ Fix is here */}
        </div>
    );
};

export default Error;
