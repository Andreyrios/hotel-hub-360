import { ReactNode } from 'react';
// Libraries
import { MdLocationPin } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaPen, FaPhone } from 'react-icons/fa';
// Styles
import styles from './CustomCard.module.css'
// Utils
import { starRating } from '../../utils/renderStars';
import { ItemHotel } from '../../interfaces/generalInterfaces';

const ITEM = {
  nit: 48658,
  phone: "864-278-5557",
  email: "Berenice_Bradtke7@yahoo.com",
  address: "567 Goodwin Brooks",
  star: 10,
  available: true,
  created_at: "2001-02-17T17:24:48.428Z",
  name: "Hansen - Breitenberg",
  image: "https://loremflickr.com/640/480/business",
  id: 1
}

interface Props {
  children?: ReactNode
  item?: ItemHotel
}

function CustomCard({ item = ITEM }: Props) {

  return (
    <>
      <div className="p-1" style={{ width: '25%' }}>
        <div className={`${styles.customCard} card`}>
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