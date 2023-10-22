import { useEffect, useState } from 'react';
// Styles
import styles from './ModalDetailRoomToBooking.module.css'
// Libraries
import { FaTimes } from 'react-icons/fa';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
// Interfaces
import { ItemUser, QuerySearch, ItemBooking, ItemRoom } from '../../interfaces/generalInterfaces';
// Components
import CustomInput from '../Input/Input';
import TitleView from '../TitleView/TitleView';
import ContainerTitleView from '../ContainerTitleView/ContainerTitleView';
// Utils
import cashFormatter from '../../utils/cashFormatter';
import alertInformation from '../../utils/alertInformation';

interface Props {
  show: boolean
  onHide: () => void
  data: ItemRoom
  hotelName: string
  querySearch: QuerySearch
  apiCreateCustomerBooking: (dataToSend: ItemBooking) => void
}

function ModalDetailRoomToBooking({ show, onHide, data, querySearch, apiCreateCustomerBooking, hotelName }: Props) {
  const today = new Date().toISOString().substr(0, 10);
  const [comments, setComments] = useState('')
  const [guestsList, setGuestsList] = useState<ItemUser[]>([])
  const [dataGuest, setDataGuest] = useState<ItemUser>({
    dni: '',
    email: '',
    phone: '',
    gender: '',
    last_name: '',
    birth_date: '',
    first_name: '',
    document_type: '',
  })

  useEffect(() => {
    setGuestsList([])
  }, [show])


  const handleClick = () => {
    const { dni, email, last_name, birth_date, first_name, document_type } = dataGuest

    if (dni === '' || email === '' || last_name === '' || birth_date === '' || first_name === '' || document_type === '') {
      alertInformation({
        title: '',
        icon: 'warning',
        color: 'var(--COLOR-WARNING)',
        message: 'Completa todos los campos obligatorios antes de continuar.',
      })
      return
    }
    setGuestsList((prevGuestsList) => [...prevGuestsList, dataGuest]);
    setDataGuest({
      dni: '',
      email: '',
      phone: '',
      gender: '',
      last_name: '',
      birth_date: '',
      first_name: '',
      document_type: '',
    });
  };

  const handleChange = (name: string, value: string) => {
    setDataGuest((prevDataGuest) => ({ ...prevDataGuest, [name]: value }));
  };

  const handleDelete = (index: number) => {
    const updatedGuestsList = guestsList.filter((_, i) => i !== index);
    setGuestsList(updatedGuestsList);
  };

  const handleClickBooking = () => {
    const dataToSend: ItemBooking = {
      id: 0,
      city: '',
      user_id: 0,
      room_id: 0,
      quantity_room: 1,
      created_at: today,
      comment: comments,
      price: data.base_price,
      checkIn: querySearch.checkIn,
      checkOut: querySearch.checkOut,
      number_guests: guestsList.length,
      list_guests: JSON.stringify(guestsList),
      user_name: `${guestsList[0].first_name} ${guestsList[0].last_name}`,
    }
    apiCreateCustomerBooking(dataToSend)
  }
  return (
    <>
      <Modal
        size='lg'
        centered
        show={show}
        onHide={() => {
          onHide()
        }}
        aria-labelledby='contained-modal-title-vcenter'
      >
        <Modal.Body
          style={{ borderRadius: '6.5px', position: 'relative' }}
        >
          <ContainerTitleView>
            <TitleView text={data.title_hotel} />
            <FaTimes
              className={styles.iconsModal}
              onClick={() => {
                onHide()
              }}
            />
          </ContainerTitleView>

          <div className={styles.main}>
            <div className={styles.containerData}>
              <p className={styles.label}>Nombre</p>
              <p className={styles.data}>{hotelName}</p>
              <p className={styles.label}>Habitaciones</p>
              <p className={styles.data}>{data.type}</p>
              <p className={styles.label}>Huespedes</p>
              <p className={styles.data}>{data.number_guests}</p>
              <p className={styles.label}>Precio</p>
              <p className={styles.data}>{cashFormatter(data.base_price)} + {data.tax}</p>
              <p className={styles.label}>Comentarios</p>
              <p className={styles.data}>{data.description}</p>

            </div>
            <div className={styles.dataUsers}>
              <h4>Huespedes {guestsList.length}/{data.number_guests}</h4>
              <div>
                <div>
                  {guestsList.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className={styles.addedUser}
                        onClick={() => handleDelete(index)}
                      >
                        <span>{index + 1} - {item.first_name} {item.last_name}</span>
                        <FaTimes />
                      </div>
                    )
                  })}
                </div>
                {guestsList.length < +data.number_guests &&
                  <form className={styles.form}>
                    <div className={styles.containerInput}>
                      <CustomInput
                        type='text'
                        name='first_name'
                        textLabel='Nombre'
                        value={dataGuest.first_name}
                        placeholder='Ingresa nombre'
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                      />
                    </div>
                    <div className={styles.containerInput}>
                      <CustomInput
                        type='text'
                        name='last_name'
                        textLabel='Apellido'
                        value={dataGuest.last_name}
                        placeholder='Ingresa apellido'
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                      />
                    </div>
                    <div className={styles.containerInput}>
                      <CustomInput
                        type='date'
                        name='birth_date'
                        textLabel='Fecha de Nacimiento'
                        value={dataGuest.birth_date}
                        placeholder=''
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                      />
                    </div>
                    <div className={styles.containerInput}>
                      <CustomInput
                        name='gender'
                        placeholder=''
                        isSelectOption
                        textLabel='Género'
                        value={dataGuest.gender}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        options={[
                          { value: 'female', text: 'Femenino' },
                          { value: 'male', text: 'Masculino' },
                          { value: 'other', text: 'Otro' },
                        ]}
                      />
                    </div>
                    <div className={styles.containerInput}>
                      <CustomInput
                        name='document_type'
                        placeholder=''
                        isSelectOption
                        textLabel='Tipo de documento'
                        value={dataGuest.document_type}
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        options={[
                          { value: 'TI', text: 'Tarjeta Identidad' },
                          { value: 'CC', text: 'Cédula de ciudadanía' },
                          { value: 'Passport', text: 'Pasaporte' },
                        ]}
                      />
                    </div>
                    <div className={styles.containerInput}>
                      <CustomInput
                        name='dni'
                        type='number'
                        value={`${dataGuest.dni}`}
                        textLabel='Número de documento'
                        placeholder='Ingresa número documento'
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                      />
                    </div>

                    <div className={styles.containerInput}>
                      <CustomInput
                        name='email'
                        type='email'
                        textLabel='Email'
                        value={`${dataGuest.email}`}
                        placeholder='Ingresa Correo electrónico'
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                      />
                    </div>

                    <div className={styles.containerInput}>
                      <CustomInput
                        name='phone'
                        type='phone'
                        required
                        value={`${dataGuest.phone}`}
                        textLabel='Teléfono'
                        placeholder='Ingresa número de teléfono'
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                      />
                    </div>
                    <Button
                      variant='success'
                      style={{ marginInlineStart: 'auto' }}
                      onClick={handleClick}>
                      Agregar
                    </Button>
                  </form>
                }
                {guestsList.length === data.number_guests &&
                  <>
                    <CustomInput
                      isTextArea
                      type='text'
                      name='comments'
                      value={comments}
                      textLabel='Observaciones'
                      placeholder='Ingresa aquí todas tus observaciones'
                      onChange={(e) => setComments(e.target.value)}
                    />
                    <Button
                      variant='success'
                      style={{ marginInlineStart: 'auto' }}
                      onClick={handleClickBooking}>
                      Reservar ahora
                    </Button>
                  </>
                }
              </div>
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalDetailRoomToBooking