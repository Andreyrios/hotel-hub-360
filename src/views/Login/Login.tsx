import { useEffect, useState } from "react";
// Libraries
import { FaKey, FaUser, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// Components
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
// Interfaces
import { useAppDispatch, useAppSelector } from "../../interfaces/redux";
// Redux
import { setInfoUser } from "../../redux/Actions/userActions";
// Utils
import { pathName } from "../../utils/pathName";
// Styles
import styles from './Login.module.css'

function Login() {
  const userReducer = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false)
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (JSON.stringify(userReducer.user) !== '{}') {
      navigate(pathName.main)
      return
    }
  }, [])

  const handleChange = (name: string, value: string) => {
    setLoginInfo({
      ...loginInfo,
      [name]: value
    })
  }

  const user = {
    name: 'Jhon',
    lastName: 'Doe',
    id: 10
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
      navigate(pathName.main);
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