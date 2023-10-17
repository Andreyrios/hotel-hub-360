import { USERS_PERMISSIONS } from "./userPermissions";

interface LoginInfo {
  email: string
  password: string
}

const isAuthAdmin = (loginInfo: LoginInfo) => {
  const { email, password } = loginInfo

  const userAuthType = {
    userCustomer: {
      id: 10,
      name: 'Jhon',
      lastName: 'Doe',
      email: loginInfo.email,
      permissions: [USERS_PERMISSIONS.customer]
    },

    userAdmin: {
      id: 1,
      lastName: '',
      name: 'Admin',
      email: loginInfo.email,
      permissions: [USERS_PERMISSIONS.admin]
    }
  }

  const credentialsAdmin = {
    email: 'admin@360exploration.com',
    password: 'admin360*Exploration'
  }

  const userToLogin =
    JSON.stringify(credentialsAdmin) === JSON.stringify(loginInfo)
      ? userAuthType.userAdmin
      : userAuthType.userCustomer

  const error =
    (email.includes(credentialsAdmin.email) && password !== credentialsAdmin.password)
      ? true : false

  return { userToLogin, error }
}

export default isAuthAdmin