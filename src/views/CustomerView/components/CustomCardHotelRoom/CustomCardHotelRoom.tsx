// Libraries
import { MdKingBed, MdLocationPin } from 'react-icons/md';
import { FaMoneyBillAlt, FaUser } from 'react-icons/fa';
// Styles
import styles from './CustomCardHotelRoom.module.css'
// Interfaces
import { ItemRoom } from '../../../../interfaces/generalInterfaces';
// Utils
import cashFormatter from '../../../../utils/cashFormatter';

interface Props {
  item: ItemRoom
  onClick: () => void
  onClickIcon: () => void
}

function CustomCardHotelRoom({ item, onClick, onClickIcon }: Props) {

  return (
    <>
      <div className={`p-1 ${styles.cardComplete}`}>
        <div className={`${styles.customCard} card`} onClick={onClick}>
          <figure className={styles.figure}>
            <img className={styles.img} src={item.image} alt={item.title_hotel} title={item.title_hotel} />
          </figure>
          <div className={styles.InfoCard}>
            <p className={styles.title}><MdKingBed /> {item.type}</p>
            <p><FaMoneyBillAlt /> {cashFormatter(item.base_price)} + {item.tax}</p>
            <p><FaUser /> {item.number_guests} - <MdKingBed /> {item.type}</p>
            <p>{item.description}</p>
          </div>
          <div
            className={styles.buttonSection}
            onClick={(e) => {
              e.preventDefault()
              onClickIcon()
            }}
          >
            Reservar ahora
          </div>
        </div>
      </div>
    </>
  )
}

export default CustomCardHotelRoom