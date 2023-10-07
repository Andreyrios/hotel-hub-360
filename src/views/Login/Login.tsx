import { useEffect } from "react";
// Libraries
import { useNavigate } from "react-router-dom";
// Interfaces
import { useAppDispatch, useAppSelector } from "../../interfaces/redux";
// Redux
import { setInfoUser } from "../../redux/Actions/userActions";
// Utils
import { pathName } from "../../utils/pathName";

function Login() {
  const userReducer = useAppSelector((state: any) => state.userReducer);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (JSON.stringify(userReducer.user) !== '{}') {
      navigate(pathName.inicio)
      return
    }
  }, [])

  const user = {
    name: 'jhon',
    lastName: 'Doe',
    id: 10
  }

  const login = () => {
    dispatch(
      setInfoUser({
        ...userReducer,
        user: user
      })
    );
    setTimeout(() => {
      navigate(pathName.inicio);
    }, 1000)
  }

  return (
    <h3>
      Login
      <p>
        {userReducer.user.id} {userReducer.user.name} {userReducer.user.lastName}
      </p>
      <button onClick={login}>Login</button>
    </h3>
  );
}

export default Login;