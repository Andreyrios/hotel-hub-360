// Styles
import styles from './Input.module.css'

interface Props {
  type: string
  name?: string
  value: string
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  textLabel?: string
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
  isTextArea?: boolean | null | undefined
}

function CustomInput(props: Props) {

  return (
    <label className={styles.customLabel}>
      {props.textLabel}
      <div className={styles.containerInput}>
        {!props.isTextArea ?
          <input
            {...props}
            className={styles.customInput}
          />
          :
          <textarea
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            placeholder={props.placeholder}
            className={styles.customTextArea}
            onChange={(e) => props.onChange(e)}
          />
        }
        {props.icon && <props.icon className={styles.icon} />}
      </div>
    </label>
  )
}

export default CustomInput