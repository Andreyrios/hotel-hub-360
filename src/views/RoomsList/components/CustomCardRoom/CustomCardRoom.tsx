// Libraries
import { MdLocationPin } from 'react-icons/md';
import { FaDollarSign, FaEye, FaEyeSlash } from 'react-icons/fa';
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
      <div className="p-1" style={{ width: '25%' }}>
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
            <p><MdLocationPin /> {item.address} - {item.city}</p>
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