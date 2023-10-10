// Styles
import styles from './CustomButton.module.css'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  textButton: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
}

function CustomButton(props: Props) {

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${styles.customButton} ${props.className}`}
    >
      {props.icon && <props.icon className={styles.icon} />}
      {props.textButton}
    </button>
  )
}

export default CustomButton