// Styles
import styles from './TitleView.module.css'

interface Props {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>
  text: string
  onClick?: () => void
}

function TitleView({ text, onClick, Icon }: Props) {
  return (
    <div
      className={styles.mainTitle}
      onClick={() => onClick && onClick()}
      style={{ cursor: onClick ? 'pointer' : 'auto' }}
    >
      {Icon &&
        <Icon />
      }
      <h3 className={`${styles.title} m-0 mx-2`}>{text}</h3>
    </div>
  )
}

export default TitleView