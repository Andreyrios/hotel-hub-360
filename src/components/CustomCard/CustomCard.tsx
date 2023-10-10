// Libraries
import { MdLocationPin } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaPhone } from 'react-icons/fa';
// Styles
import styles from './CustomCard.module.css'
// Utils
import { starRating } from '../../utils/renderStars';
import { ItemHotel } from '../../interfaces/generalInterfaces';

interface Props {
  item: ItemHotel
  onClick: () => void
  onClickIcon: () => void
}

function CustomCard({ item, onClick, onClickIcon }: Props) {

  return (
    <>
      <div className="p-1" style={{ width: '25%' }}>
        <div className={`${styles.customCard} card ${!item.available && styles.opacityAvailable}`} onClick={onClick}>
          <div className={styles.rating}>
            {starRating(item.star)}
          </div>
          <figure className={styles.figure}>
            <img className={styles.img} src={item.image} alt="Hotel" />
          </figure>
          <div className={styles.InfoCard}>
            <p className={styles.title}>{item.name}</p>
            <p><FaPhone /> {item.phone}</p>
            <p><MdLocationPin /> {item.address}</p>
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

export default CustomCard