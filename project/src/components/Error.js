import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  const { status, statusText, data } = err;
  return (
    <>
      {console.log(err)}
      <h1>
        {status} :{statusText}
      </h1>
      <h5>{data}🥲🥲🥲</h5>
    </>
  );
};

export default Error;
