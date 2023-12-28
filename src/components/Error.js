import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return <div>"OOPS..Wrong Page ERROR !!!" : {err.statusText}</div>;
};

export default Error;
