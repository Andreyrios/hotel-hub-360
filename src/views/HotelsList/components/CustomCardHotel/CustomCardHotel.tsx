// Libraries
import { MdLocationPin } from 'react-icons/md';
import { FaEye, FaEyeSlash, FaPhone } from 'react-icons/fa';
// Styles
import styles from './CustomCardHotel.module.css'
// Interfaces
import { useAppSelector } from '../../../../interfaces/redux';
import { ItemHotel } from '../../../../interfaces/generalInterfaces';
// Utils
import { starRating } from '../../../../utils/renderStars';
import { USERS_PERMISSIONS } from '../../../../utils/userPermissions';

interface Props {
  item: ItemHotel
  onClick: () => void
  onClickIcon?: () => void
}

function CustomCardHotel({ item, onClick, onClickIcon }: Props) {
  const userReducer = useAppSelector((state) => state.userReducer);

  return (
    <>
      <div className={`p-1 ${styles.cardComplete}`}>
        <div className={`${styles.customCard} card ${!item.available && styles.opacityAvailable}`} onClick={onClick}>
          <div className={styles.rating}>
            {starRating(item.star)}
          </div>
          <figure className={styles.figure}>
            <img className={styles.img} src={item.image} alt={item.name} />
          </figure>
          <div className={styles.InfoCard}>
            <p className={styles.title}>{item.name}</p>
            <p><FaPhone /> {item.phone}</p>
            <p><MdLocationPin /> {item.address} - {item.city}</p>
          </div>
          {userReducer.user.permissions.includes(USERS_PERMISSIONS.admin) &&
            <div className={styles.buttonSection}>
              {item.available
                ? <FaEye className={styles.icon} title="Deshabilitar"
                  onClick={(e) => {
                    e.preventDefault()
                    if (onClickIcon) onClickIcon()
                  }}
                />
                : <FaEyeSlash className={styles.icon} title="Habilitar"
                  onClick={(e) => {
                    e.preventDefault()
                    if (onClickIcon) onClickIcon()
                  }}
                />
              }
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default CustomCardHotel