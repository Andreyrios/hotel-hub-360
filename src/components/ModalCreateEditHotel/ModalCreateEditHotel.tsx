import { useEffect, useState } from 'react';
// Styles
import styles from './ModalCreateEditHotel.module.css'
// Libraries
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { FaPen, FaTimes } from 'react-icons/fa';
// Interfaces
import { CreateItemHotel, ItemHotel } from '../../interfaces/generalInterfaces';
// Components
import CustomInput from '../Input/Input';
import TitleView from '../TitleView/TitleView';
import CustomButton from '../CustomButton/CustomButton';
import ContainerTitleView from '../ContainerTitleView/ContainerTitleView';
// Utils
import { dataToCreateHotel } from '../../utils/dataToCreateHotel';
import { pathName } from '../../utils/pathName';

interface Props {
  show: boolean
  title: string
  onHide: () => void
  mainClick: (data: ItemHotel | CreateItemHotel) => void
  dataHotelProps?: ItemHotel | CreateItemHotel
}

function ModalCreateEditHotel({ show, onHide, title, dataHotelProps, mainClick }: Props) {
  const [dataHotel, setDataHotel] = useState<CreateItemHotel | ItemHotel>(dataHotelProps || dataToCreateHotel)
  const [isEdit, setIsEdit] = useState(dataHotelProps && false)
  const navigate = useNavigate();

  useEffect(() => {
    if (dataHotelProps) {
      setDataHotel(dataHotelProps)
    }
  }, [dataHotelProps])

  const handleChange = (name: string, value: string) => {
    setDataHotel({
      ...dataHotel,
      [name]: value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      mainClick(dataHotel);
      setIsEdit(false)
      setDataHotel(dataToCreateHotel)
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
          setDataHotel(dataToCreateHotel)
          onHide()
        }}
        aria-labelledby='contained-modal-title-vcenter'
      >
        <Modal.Body
          className='text-center pt-5'
          style={{ borderRadius: '6.5px', position: 'relative' }}
        >
          <ContainerTitleView>
            <TitleView text={isEdit ? 'Editar información' : title} />
            <div>
              {dataHotelProps &&
                <Button
                  variant='success'
                  onClick={() => navigate(pathName.roomsList, { state: { idHotel: dataHotel.id } })}
                >
                  Ver habitaciones
                </Button>
              }
              <div className={styles.containerIconsControl}>
                {!isEdit && dataHotelProps &&
                  <FaPen className={styles.iconsModal} onClick={() => setIsEdit(true)} />
                }
                <FaTimes
                  className={styles.iconsModal}
                  onClick={() => {
                    setIsEdit(false)
                    setDataHotel(dataToCreateHotel)
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
                name='name'
                textLabel='Nombre'
                value={dataHotel.name}
                placeholder='Nombre del hotel'
                disabled={dataHotelProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputBig}>
              <CustomInput
                name='email'
                type='email'
                textLabel='Email'
                value={dataHotel.email}
                placeholder='Correo electrónico'
                disabled={dataHotelProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputSmall}>
              <CustomInput
                name='phone'
                type='phone'
                textLabel='Teléfono'
                value={dataHotel.phone}
                placeholder='Número de teléfono'
                disabled={dataHotelProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputSmall}>
              <CustomInput
                name='nit'
                type='number'
                textLabel='Nit'
                placeholder='Número Nit'
                value={`${dataHotel.nit}`}
                disabled={dataHotelProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputSmall}>
              <CustomInput
                name='star'
                type='number'
                placeholder='Estrellas'
                value={`${dataHotel.star}`}
                textLabel='Número de estrellas'
                disabled={dataHotelProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>

            <div className={styles.containerInputBig}>
              <CustomInput
                type='text'
                name='address'
                textLabel='Dirección'
                value={dataHotel.address}
                placeholder='Ingresa la Dirección'
                disabled={dataHotelProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>
            <div className={styles.containerInputBig}>
              <CustomInput
                type='url'
                name='image'
                value={dataHotel.image}
                textLabel='Url de la imagen'
                placeholder='Ingresa la url de la imagen'
                disabled={dataHotelProps ? !isEdit : false}
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            </div>

            {isEdit &&
              <div className={styles.containerButtons}>
                <div className={styles.containerButton}>
                  <CustomButton
                    type='button'
                    textButton='Cancelar'
                    className={styles.btnAdiStyle}
                    onClick={() => {
                      setIsEdit(false)
                      if (dataHotelProps) {
                        setDataHotel(dataHotelProps)
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

            {!dataHotelProps &&
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

export default ModalCreateEditHotel