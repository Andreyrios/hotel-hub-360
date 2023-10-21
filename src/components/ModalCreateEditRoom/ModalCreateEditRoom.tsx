import { useEffect, useState } from 'react';
// Styles
import styles from './ModalCreateEditRoom.module.css'
// Libraries
import Modal from 'react-bootstrap/Modal';
import { FaPen, FaTimes } from 'react-icons/fa';
// Interfaces
import { ItemRoom } from '../../interfaces/generalInterfaces';
// Components
import CustomInput from '../Input/Input';
import TitleView from '../TitleView/TitleView';
import CustomButton from '../CustomButton/CustomButton';
import ContainerTitleView from '../ContainerTitleView/ContainerTitleView';
// Utils
import { dataToCreateRoom } from '../../utils/dataToCreateRoom';

interface Props {
  show: boolean
  title: string
  onHide: () => void
  mainClick: (data: ItemRoom) => void
  dataRoomProps?: ItemRoom
}

function ModalCreateEditRoom({ show, onHide, title, dataRoomProps, mainClick }: Props) {
  const [dataRoom, setDataRoom] = useState<ItemRoom>(dataRoomProps || dataToCreateRoom)
  const [isEdit, setIsEdit] = useState(dataRoomProps && false)

  useEffect(() => {
    if (dataRoomProps) {
      setDataRoom(dataRoomProps)
    }
  }, [dataRoomProps])

  const handleChange = (name: string, value: string) => {
    setDataRoom({
      ...dataRoom,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      mainClick(dataRoom);
      setIsEdit(false)
      setDataRoom(dataToCreateRoom)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Modal
        size='lg'
        centered
        show={show}
        onHide={() => {
          setIsEdit(false)
          setDataRoom(dataToCreateRoom)
          onHide()
        }}
        aria-labelledby='contained-modal-title-vcenter'
      >
        <Modal.Body
          className='text-center pt-5'
          style={{ borderRadius: '6.5px' }}
        >
          <ContainerTitleView>
            <TitleView text={isEdit ? 'Editar información' : title} />
            <div className={styles.modalsControl}>
              <div className={styles.containerIconsControl}>
                {!isEdit && dataRoomProps &&
                  <FaPen className={styles.iconsModal} onClick={() => setIsEdit(true)} />
                }
                <FaTimes
                  className={styles.iconsModal}
                  onClick={() => {
                    setIsEdit(false)
                    setDataRoom(dataToCreateRoom)
                    onHide()
                  }}
                />
              </div>
            </div>
          </ContainerTitleView>
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>

            <div className={styles.containerInputBig}>
              <CustomInput
                type='text'
                name='type'
                textLabel='Tipo'
                value={dataRoom.type}
                placeholder='Tipo de habitación'
                disabled={dataRoomProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputBig}>
              <CustomInput
                type='url'
                name='image'
                textLabel='Imagen'
                value={dataRoom.image}
                placeholder='Url de la imagen'
                disabled={dataRoomProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputSmall}>
              <CustomInput
                name='number'
                type='number'
                textLabel='Habitación'
                value={`${dataRoom.number}`}
                placeholder='Nro Habitación'
                disabled={dataRoomProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputSmall}>
              <CustomInput
                type='number'
                name='number_guests'
                textLabel='Huespedes'
                value={`${dataRoom.number_guests}`}
                placeholder='Cantidad de huespedes'
                disabled={dataRoomProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputSmall}>
              <CustomInput
                type='number'
                name='base_price'
                textLabel='Precio'
                placeholder='Precio base'
                value={`${dataRoom.base_price}`}
                disabled={dataRoomProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputSmall}>
              <CustomInput
                name='tax'
                type='number'
                textLabel='Impuesto'
                value={dataRoom.tax}
                placeholder='Impuesto'
                disabled={dataRoomProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputBig}>
              <CustomInput
                type='text'
                name='address'
                textLabel='Dirección'
                value={dataRoom.address}
                placeholder='Ingresa la Dirección'
                disabled={dataRoomProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputBig}>
              <CustomInput
                type='text'
                name='city'
                textLabel='Ciudad'
                value={dataRoom.city}
                placeholder='Ingresa la Ciudad'
                disabled={dataRoomProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>

            {/* <div className={styles.containerInputBig}> */}
            <CustomInput
              isTextArea
              type='text'
              name='description'
              textLabel='Descripción'
              placeholder='Descripción'
              value={dataRoom.description}
              disabled={dataRoomProps ? !isEdit : false}
              onChange={(e) => handleChange(e.target.name, e.target.value)}
            />
            {/* </div> */}

            {isEdit &&
              <div className={styles.containerButtons}>
                <div className={styles.containerButton}>
                  <CustomButton
                    type='button'
                    textButton='Cancelar'
                    className={styles.btnAdiStyle}
                    onClick={() => {
                      setIsEdit(false)
                      if (dataRoomProps) {
                        setDataRoom(dataRoomProps)
                      }
                    }}
                  />
                </div>

                <div className={styles.containerButton}>
                  <CustomButton
                    type='submit'
                    textButton='Guardar'
                  />
                </div>
              </div>
            }

            {!dataRoomProps &&
              <CustomButton
                type='submit'
                textButton='Crear'
              />
            }
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalCreateEditRoom