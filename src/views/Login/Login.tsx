import { useEffect, useState } from "react";
// Libraries
import { useNavigate } from "react-router-dom";
import { FaKey, FaUser, FaUserCircle } from "react-icons/fa";
// Components
import Loader from "../../components/Loader/Loader";
import CustomInput from "../../components/Input/Input";
import CustomButton from "../../components/CustomButton/CustomButton";
// Interfaces
import { useAppDispatch, useAppSelector } from "../../interfaces/redux";
// Redux
import { setInfoUser } from "../../redux/Actions/userActions";
// Utils
import { pathName } from "../../utils/pathName";
import { USERS_PERMISSIONS } from "../../utils/userPermissions";
// Styles
import styles from './Login.module.css'

interface User {
  id: number,
  name: string,
  lastName: string,
  permissions: string[]
}

function Login() {
  const userReducer = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const userSaved = userReducer.user

  const [loading, setLoading] = useState(false)
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (JSON.stringify(userSaved) !== '{}' && userSaved.permissions.includes(USERS_PERMISSIONS.admin)) {
      navigate(pathName.main)
      return
    }

    if (JSON.stringify(userSaved) !== '{}' && userSaved.permissions.includes(USERS_PERMISSIONS.customer)) {
      navigate(pathName.customer)
      return
    }
  }, [userSaved, navigate])

  const handleChange = (name: string, value: string) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value
    })
  }

  const user: User = {
    id: 10,
    name: 'Jhon',
    lastName: 'Doe',
    permissions: loginInfo.email === 'admin@admin.com' ? [USERS_PERMISSIONS.admin] : [USERS_PERMISSIONS.customer]
  }

  const login = () => {
    setLoading(true)
    setTimeout(() => {
      dispatch(
        setInfoUser({
          ...userReducer,
          user: user
        })
      );
      setLoading(false)
      if (user.permissions.includes(USERS_PERMISSIONS.admin)) {
        navigate(pathName.main);
        return
      }
      if (user.permissions.includes(USERS_PERMISSIONS.customer)) {
        navigate(pathName.main);
        return
      }
    }, 2000)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const isValidData = validateDataLogin()

    if (isValidData) {
      login()
    } else {
      alert('Datos invalidos')
    }
  }

  const validateDataLogin = () => {
    const { email, password } = loginInfo
    if (email === '' || !email || !password || password === '') {
      return false
    }

    return true
  }

  return (
    <div className={styles.main}>
      <Loader show={loading} />
      <div className={styles.login}>
        <FaUserCircle className={styles.icon} />
        <h3>Iniciar sesión</h3>
        <form onSubmit={handleSubmit} >
          <CustomInput
            type="email"
            name="email"
            icon={FaUser}
            placeholder='Username'
            value={loginInfo.email}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <br />
          <CustomInput
            icon={FaKey}
            type="password"
            name="password"
            placeholder='********'
            value={loginInfo.password}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
          <br />
          <div className={styles.containerButton}>
            <CustomButton
              type='submit'
              textButton='Login'
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;