import { CSSProperties, ReactNode } from 'react';
// Styles
import styles from './ContainerList.module.css'

interface Props {
  children: ReactNode
  customStyle?: CSSProperties | undefined
  className?: string
}

function ContainerList({ children, customStyle, className }: Props) {
  return (
    <div className={`${styles.mainContainer} ${className}`} style={customStyle}>
      {children}
    </div>
  )
}

export default ContainerList