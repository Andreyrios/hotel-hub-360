// Libraries
import { FaDollarSign, FaEye, FaEyeSlash, FaUsers } from 'react-icons/fa';
// Styles
import styles from './CustomCardRoom.module.css'
// Interfaces
import { ItemRoom } from '../../../../interfaces/generalInterfaces';

interface Props {
  item: ItemRoom
  onClick: () => void
  onClickIcon: () => void
}

function CustomCardRoom({ item, onClick, onClickIcon }: Props) {

  return (
    <>
      <div className={`p-1 ${styles.cardComplete}`}>
        <div
          onClick={onClick}
          className={`${styles.customCard} card ${!item.available && styles.opacityAvailable}`}
        >
          <figure className={styles.figure}>
            <img className={styles.img} src={item.image} alt={item.type} />
          </figure>
          <div className={styles.InfoCard}>
            <p className={styles.title}>{item.type} - {item.number}</p>
            <p><FaDollarSign /> {item.base_price} - {item.tax}</p>
            <p><FaUsers /> {item.number_guests} Huespedes</p>
          </div>
          <div className={styles.buttonSection}>
            {item.available
              ? <FaEye className={styles.icon}
                onClick={(e) => {
                  e.preventDefault()
                  onClickIcon()
                }}
              />
              : <FaEyeSlash className={styles.icon}
                onClick={(e) => {
                  e.preventDefault()
                  onClickIcon()
                }}
              />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomCardRoom