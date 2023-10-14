//libraries
import { Navigate, Outlet } from "react-router-dom";
// Utils
import { pathName } from "../pathName";

interface Props {
  children?: any
  isAllowed: boolean
}

export const ActiveSession = ({ children, isAllowed }: Props) => {
  if (!isAllowed) {
    return <Navigate to={pathName.login} />
  }

  return children || <Outlet />;
};

export default ActiveSession;