// Styles
import styles from './Input.module.css'

interface ItemOption {
  value: string
  text: string
}

interface Props {
  type?: string
  name?: string
  value: string
  textLabel?: string
  placeholder: string
  disabled?: boolean
  required?: boolean | null | undefined
  isTextArea?: boolean | null | undefined
  isSelectOption?: boolean | null | undefined
  icon?: React.FC<React.SVGProps<SVGSVGElement>>
  onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => void
  options?: ItemOption[]
}

function CustomInput(props: Props) {

  return (
    <label className={styles.customLabel}>
      {props.textLabel}
      <div className={styles.containerInput}>

        {!props.isTextArea && !props.isSelectOption &&
          <input
            {...props}
            required
            className={styles.customInput}
          />
        }

        {props.isTextArea &&
          <textarea
            name={props.name}
            value={props.value}
            disabled={props.disabled}
            placeholder={props.placeholder}
            className={styles.customTextArea}
            onChange={(e) => props.onChange(e)}
          />
        }

        {props.isSelectOption &&
          <select
            name={props.name}
            className={styles.customSelect}
            onChange={(e) => props.onChange(e)}>
            <option value="">Selecciona una opción</option>
            {props.options?.map((item: ItemOption, index) => {
              return (
                <option key={index} value={item.value}>{item.text}</option>
              )
            })}
          </select>
        }
        {props.icon && <props.icon className={styles.icon} />}
      </div>
    </label>
  )
}

export default CustomInput