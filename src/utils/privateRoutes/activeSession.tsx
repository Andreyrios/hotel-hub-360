//libraries
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../interfaces/redux";
// Utils
import { pathName } from "../pathName";


export const ActiveSession = () => {
  const userReducer = useAppSelector((state: any) => state.userReducer)

  if (JSON.stringify(userReducer.user) === '{}' || !userReducer.user || userReducer.user === undefined || userReducer.user === null) {
    return <Navigate to={pathName.login} />
  }

  return <Outlet />;
};

export default ActiveSession;