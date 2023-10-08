import { ReactNode } from 'react';
// Styles
import styles from './ContainerList.module.css'

interface Props {
  children: ReactNode
}

function ContainerList({ children }: Props) {
  return (
    <div className={styles.mainContainer}>
      {children}
    </div>
  )
}

export default ContainerList