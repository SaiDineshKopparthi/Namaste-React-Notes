import { useRouteError } from "react-router-dom";

export default ErrorPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>OOPS!!</h1>
      <h2>
        {err.status} - {err.statusText}
      </h2>
      <h2>Something went wrong.</h2>
    </div>
  );
};
