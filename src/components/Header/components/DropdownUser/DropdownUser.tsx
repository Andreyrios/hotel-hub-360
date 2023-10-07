import Dropdown from 'react-bootstrap/Dropdown';
import { useAppDispatch, useAppSelector } from '../../../../interfaces/redux';
import { setInfoUser } from '../../../../redux/Actions/userActions';
import styles from './DropdownUser.module.css'

function DropdownUser() {
  const userReducer = useAppSelector((state: any) => state.userReducer);
  const dispatch = useAppDispatch()

  const logOut = () => {
    dispatch(
      setInfoUser({
        ...userReducer,
        user: {}
      })
    );
  }

  console.log('userReducer.user', userReducer.user)

  return (
    <div>
      {
        JSON.stringify(userReducer.user) !== '{}' &&
        <Dropdown>
          <Dropdown.Toggle className={styles.dropdownToggle}>
            {userReducer.user.name} {userReducer.user.lastName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={logOut} >Cerrar sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      }
    </div>
  );
}

export default DropdownUser;