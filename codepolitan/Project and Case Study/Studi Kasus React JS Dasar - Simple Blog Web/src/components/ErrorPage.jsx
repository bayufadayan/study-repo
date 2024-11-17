import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return <div>Oh, Ada Error !!!</div>
}

export default ErrorPage;