import { ReactNode } from 'react';
// Styles
import styles from './ContainerTitleView.module.css'

interface Props {
  children: ReactNode
}

function ContainerTitleView({ children }: Props) {
  return (
    <div className={styles.mainContainer}>
      {children}
    </div>
  )
}

export default ContainerTitleView