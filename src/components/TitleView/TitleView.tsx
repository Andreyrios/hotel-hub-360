// Styles
import styles from './TitleView.module.css'

interface Props {
  text: string
}

function TitleView({ text }: Props) {
  return (
    <h3 className={`${styles.title} m-0`}>{text}</h3>
  )
}

export default TitleView