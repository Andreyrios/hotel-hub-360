// Libraries
import Dropdown from 'react-bootstrap/Dropdown';
// Interfaces
import { useAppDispatch, useAppSelector } from '../../../../interfaces/redux';
// Redux
import { setInfoUser } from '../../../../redux/Actions/userActions';
// Styles
import styles from './DropdownUser.module.css'

function DropdownUser() {
  const userReducer = useAppSelector((state) => state.userReducer);
  const dispatch = useAppDispatch()

  const logOut = () => {
    dispatch(
      setInfoUser({
        ...userReducer,
        user: {}
      })
    );
  }

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