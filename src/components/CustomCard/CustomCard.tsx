// Libraries
import { MdLocationPin } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaPen, FaPhone } from 'react-icons/fa';
// Styles
import styles from './CustomCard.module.css'
// Utils
import { starRating } from '../../utils/renderStars';
import { ItemHotel } from '../../interfaces/generalInterfaces';

interface Props {
  item: ItemHotel
  onClick: () => void
}

function CustomCard({ item, onClick }: Props) {

  return (
    <>
      <div className="p-1" style={{ width: '25%' }}>
        <div className={`${styles.customCard} card`} onClick={onClick}>
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
            <FaPen className={styles.icon} />
            {item.available
              ? <FaEye className={styles.icon} />
              : <FaEyeSlash className={styles.icon} />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomCard