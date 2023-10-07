// Libraries
import { Link } from 'react-router-dom'
// Styles
import styles from './Footer.module.css'
// Images
import logo from '../../images/logo360.png'
// Utils
import { pathName } from '../../utils/pathName'

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to={pathName.main} >
        <figure className={styles.logo}>
          <img src={logo} alt="HotelHub360" />
        </figure>
      </Link>
    </footer>
  )
}

export default Footer