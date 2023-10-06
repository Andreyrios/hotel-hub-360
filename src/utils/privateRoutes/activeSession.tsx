//libraries
import { Navigate, Outlet } from "react-router-dom";
// Utils
import { pathName } from "../pathName";


export const ActiveSession = () => {

  const user = true

  if (!user) {
    return <Navigate to={pathName.login} />
  }

  return <Outlet />;
};

export default ActiveSession;