// Styles
import styles from './CustomButton.module.css'

interface Props {
  type: 'button' | 'submit' | 'reset'
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  textButton: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function CustomButton(props: Props) {

  return (
    <button className={styles.customButton}>
      {props.icon && <props.icon className={styles.icon} />}
      {props.textButton}
    </button>
  )
}

export default CustomButton