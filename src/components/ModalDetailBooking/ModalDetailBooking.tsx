// Styles
import styles from './ModalDetailBooking.module.css'
// Libraries
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
// Interfaces
import { ItemBooking } from '../../interfaces/generalInterfaces';
// Components
import TitleView from '../TitleView/TitleView';
import ContainerTitleView from '../ContainerTitleView/ContainerTitleView';
// Utils
import cashFormatter from '../../utils/cashFormatter';
import { dateFormater } from '../../utils/dateFormater';

interface Props {
  show: boolean
  onHide: () => void
  dataBooking: ItemBooking
}

function ModalDetailBooking({ show, onHide, dataBooking }: Props) {

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
          style={{ borderRadius: '6.5px', position: 'relative' }}
        >
          <ContainerTitleView>
            <TitleView text={`Reserva Nro° ${dataBooking.id}`} />
            <FaTimes className={styles.iconsModal} onClick={() => onHide()} />
          </ContainerTitleView>

          <div className={styles.main}>
            <div className={styles.dataBooking}>
              <p className={styles.label}>Nombre</p>
              <p className={styles.data}>{dataBooking.user_name}</p>
              <p className={styles.label}>Hotel</p>
              <p className={styles.data}>{dataBooking.hotel_name}</p>
              <p className={styles.label}>Habitaciones</p>
              <p className={styles.data}>{dataBooking.quantity_room}</p>
              <p className={styles.label}>Tipo de habitación</p>
              <p className={styles.data}>{dataBooking.room_type}</p>
              <p className={styles.label}>Huespedes</p>
              <p className={styles.data}>{dataBooking.number_guests}</p>
              <p className={styles.label}>Precio</p>
              <p className={styles.data}>{cashFormatter(dataBooking.price)}</p>
              <p className={styles.label}>Ciudad</p>
              <p className={styles.data}>{dataBooking.city}</p>
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
                {JSON.parse(dataBooking.list_guests)?.map((user: any) => {
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
              <h4>Contacto de emergencia</h4>
              <div className={styles.user}>
                <div className={styles.containerData}>
                  <p className={styles.label}>Nombre y apellido</p>
                  <p className={styles.data}>{dataBooking.emergency_contact.fullName}</p>
                </div>
                <div className={styles.containerData}>
                  <p className={styles.label}>Teléfono</p>
                  <p className={styles.data}>{dataBooking.emergency_contact.phone}</p>
                </div>
              </div>
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalDetailBooking