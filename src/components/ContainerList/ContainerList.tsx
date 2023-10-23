import { CSSProperties, ReactNode } from 'react';
// Styles
import styles from './ContainerList.module.css'
import DefaultEmptyList from '../DefaultEmptyList/DefaultEmptyList';

interface Props {
  children: ReactNode
  customStyle?: CSSProperties | undefined
  className?: string
}

function ContainerList({ children, customStyle, className }: Props) {
  return (
    <div className={`${styles.mainContainer} ${className}`} style={customStyle}>
      {children || <DefaultEmptyList />}
    </div>
  )
}

export default ContainerList