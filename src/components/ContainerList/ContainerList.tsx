import { CSSProperties, ReactNode } from 'react';
// Styles
import styles from './ContainerList.module.css'

interface Props {
  children: ReactNode
  customStyle?: CSSProperties | undefined
}

function ContainerList({ children, customStyle }: Props) {
  return (
    <div className={styles.mainContainer} style={customStyle}>
      {children}
    </div>
  )
}

export default ContainerList