// Libraries
import { Link } from 'react-router-dom'
import DropdownUser from './components/DropdownUser/DropdownUser'
// Styles
import styles from './Header.module.css'
// Images
import logo from '../../images/logo360.png'
// Utils
import { pathName } from '../../utils/pathName'

function Header() {
  return (
    <header className={styles.header}>
      <Link to={pathName.main} >
        <figure className={styles.logo}>
          <img src={logo} alt="HotelHub360" />
        </figure>
      </Link>
      <DropdownUser />
    </header>
  )
}

export default Header