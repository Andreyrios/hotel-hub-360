// Styles
import styles from './DefaultEmptyList.module.css'

interface Props {
  title?: string
  text?: string
}

function DefaultEmptyList({ text, title }: Props) {
  return (
    <div className={styles.main}>
      <div className={styles.containerText}>
        <p className={styles.title}>{title || '!lista vacia¡'}</p>
        <p className={styles.text}>{text || 'No hay datos para mostrar'}</p>
      </div>
    </div>
  )
}

export default DefaultEmptyList