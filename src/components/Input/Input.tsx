// Styles
import styles from './Input.module.css'

interface Props {
  type: string
  name?: string
  value: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  textLabel?: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function CustomInput(props: Props) {

  return (
    <label className={styles.customLabel}>
      {props.textLabel}
      <div className={styles.containerInput}>
        <input
          {...props}
          className={styles.customInput}
        />
        {props.icon && <props.icon className={styles.icon} />}
      </div>
    </label>
  )
}

export default CustomInput