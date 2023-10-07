// Styles
import styles from './CardItem.module.css'
// Libraries
import { Link } from 'react-router-dom'
// Interfaces
import { Item } from '../../../../interfaces/itemsDashboard'

interface Props {
  item: Item
}

function CardItem({ item }: Props) {
  return (
    <Link key={item.icon} to={item.path} className={styles.card}>
      <item.icon className={styles.icon} />
      <p>{item.text}</p>
    </Link>
  )
}

export default CardItem