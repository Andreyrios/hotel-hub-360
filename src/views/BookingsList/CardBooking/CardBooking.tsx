// Libraries
import { FaMoneyBillAlt, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
// Styles
import styles from './CardBooking.module.css'
// Interfaces
import { ItemBooking } from '../../../interfaces/generalInterfaces';
// Utils
import cashFormatter from '../../../utils/cashFormatter';
import { dateFormater } from '../../../utils/dateFormater';

interface Props {
  item: ItemBooking
  onClick?: () => void
}

function CardBooking({ item, onClick }: Props) {
  const today = new Date()
  const checkOut = new Date(item.checkOut)
  const checkIn = new Date(item.checkIn)

  return (
    <>
      {checkOut > today &&
        <div className="p-1" style={{ width: '25%' }}>
          <div
            onClick={onClick}
            title={dateFormater(item.created_at)}
            className={`${styles.customCard} card`}
            style={{
              background: checkOut < today
                ? 'red'
                : checkIn <= today && checkOut >= today
                  ? 'yellow'
                  : 'green'
            }}
          >
            <div className={styles.InfoCard}>
              <p className={styles.title}>Fecha de reserva {dateFormater(item.created_at)}</p>
              <p><FaMoneyBillAlt /> {cashFormatter(item.price)}</p>
              <p><FaSignInAlt /> {dateFormater(checkIn)}</p>
              <p><FaSignOutAlt /> {dateFormater(checkOut)}</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default CardBooking