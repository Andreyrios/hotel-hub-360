import { useEffect, useState } from 'react';
// Styles
import styles from './ModalDetailBooking.module.css'
// Libraries
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
// Interfaces
import { ItemBooking, ItemUser } from '../../interfaces/generalInterfaces';
// Components
import TitleView from '../TitleView/TitleView';
import ContainerTitleView from '../ContainerTitleView/ContainerTitleView';
// Utils
import cashFormatter from '../../utils/cashFormatter';
import { dateFormater } from '../../utils/dateFormater';

interface Props {
  show: boolean
  users: ItemUser[]
  onHide: () => void
  dataBooking: ItemBooking
}

function ModalDetailBooking({ show, onHide, dataBooking, users }: Props) {
  const [guests, setGuests] = useState<ItemUser[]>([])

  useEffect(() => {
    const newGuests: ItemUser[] = []
    for (let index = 1; index < dataBooking.number_guests; index++) {
      const user: ItemUser = users[index];
      newGuests.push(user)
    }
    setGuests(newGuests)
  }, [guests, dataBooking.number_guests, users])

  return (
    <>
      <Modal
        size='lg'
        centered
        show={show}
        onHide={() => onHide()}
        aria-labelledby='contained-modal-title-vcenter'
      >
        <Modal.Body
          style={{ borderRadius: '6.5px' }}
        >
          <ContainerTitleView>
            <TitleView text={`Reserva Nro° ${dataBooking.id}`} />
            <FaTimes className={styles.iconsModal} onClick={() => onHide()} />
          </ContainerTitleView>

          <div className={styles.main}>
            <div className={styles.dataBooking}>
              <p className={styles.label}>Nombre</p>
              <p className={styles.data}>{dataBooking.user_name}</p>
              <p className={styles.label}>Habitaciones</p>
              <p className={styles.data}>{dataBooking.quantity_room}</p>
              <p className={styles.label}>Huespedes</p>
              <p className={styles.data}>{dataBooking.number_guests}</p>
              <p className={styles.label}>Precio</p>
              <p className={styles.data}>{cashFormatter(dataBooking.price)}</p>
              <p className={styles.label}>Fecha de la reserva</p>
              <p className={styles.data}>{dateFormater(dataBooking.created_at)}</p>
              <p className={styles.label}>Check In</p>
              <p className={styles.data}>{dateFormater(dataBooking.checkIn)}</p>
              <p className={styles.label}>Check Out</p>
              <p className={styles.data}>{dateFormater(dataBooking.checkOut)}</p>
              <p className={styles.label}>Comentarios</p>
              <p className={styles.data}>{dataBooking.comment}</p>
            </div>
            <div className={styles.dataUsers}>
              <h4>Huespedes</h4>
              <div>
                {guests?.map(user => {
                  return (
                    <div className={styles.user} key={user.id} >
                      <div className={styles.containerData}>
                        <p className={styles.label}>Nombre y apellido</p>
                        <p className={styles.data}>{user.first_name} {user.last_name}</p>
                      </div>
                      <div className={styles.containerData}>
                        <p className={styles.label}>Fecha de Nacimiento</p>
                        <p className={styles.data}>{dateFormater(user.birth_date)}</p>
                      </div>
                      <div className={styles.containerData}>
                        <p className={styles.label}>Género</p>
                        <p className={styles.data}>{user.gender}</p>
                      </div>
                      <div className={styles.containerData}>
                        <p className={styles.label}>Documento</p>
                        <p className={styles.data}>{user.dni}</p>
                      </div>
                      <div className={styles.containerData}>
                        <p className={styles.label}>Email</p>
                        <p className={styles.data}>{user.email}</p>
                      </div>
                      <div className={styles.containerData}>
                        <p className={styles.label}>Teléfono</p>
                        <p className={styles.data}>{user.phone}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalDetailBooking