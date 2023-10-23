// Styles
import { pathName } from '../../utils/pathName'
import styles from './404.module.css'
import { Link } from 'react-router-dom'

function NotFound404() {
  return (
    <div className={styles.mainContainer}>

      <div className={styles.containerTexts}>
        <h1 className={styles.title}>¡Perdón, Estamos Reservados en la Página 404!</h1>

        <p className={styles.text}>
          ¡Ay caramba! Parece que te has perdido en el laberinto de habitaciones.
          No te preocupes, en el Hotel de la Experiencia, a veces nuestras páginas
          también necesitan unas vacaciones sorpresa.
        </p>

        <Link className={styles.buttonBack} to={pathName.main}>Volver a la Recepción</Link>
      </div>

    </div>
  )
}

export default NotFound404