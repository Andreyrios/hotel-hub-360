import { useEffect, useState } from 'react';
// Styles
import styles from './ModalCreateEditHotel.module.css'
// Libraries
import Modal from 'react-bootstrap/Modal';
// Interfaces
import { CreateItemHotel, ItemHotel } from '../../interfaces/generalInterfaces';
// Components
import CustomInput from '../Input/Input';
import CustomButton from '../CustomButton/CustomButton';

interface Props {
  show: boolean
  onHide: () => void
  dataHotelProps: ItemHotel | CreateItemHotel
}

function ModalCreateEditHotel({ show, onHide, dataHotelProps }: Props) {
  const [dataHotel, setDataHotel] = useState<CreateItemHotel | CreateItemHotel>(dataHotelProps)

  const keysDataHotel = Object.keys(dataHotel);
  // name, nit, phone, email, address, star, available, image,
  useEffect(() => {
    setDataHotel(dataHotelProps)
  }, [dataHotelProps])

  const handleChange = (name: string, value: string) => {
    setDataHotel({
      ...dataHotel,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('dataHotel', dataHotel)
  }

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={() => onHide()}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body
          className='text-center'
          style={{ borderRadius: '6.5px' }}
        >
          <h3>Crear Hotel</h3>
          <form style={{ display: 'flex', flexWrap: 'wrap' }} onSubmit={(e) => handleSubmit(e)}>
            {keysDataHotel.map((keyDataHotel) => {
              return (
                <div key={keyDataHotel} style={{ width: '50%' }}>
                  {keyDataHotel !== 'id' && keyDataHotel !== 'available' && keyDataHotel !== 'image' && keyDataHotel !== 'created_at' &&
                    <CustomInput
                      textLabel={keyDataHotel.toUpperCase()}
                      name={keyDataHotel}
                      type={typeof dataHotel[keyDataHotel] === 'string' ? "text" : "number"}
                      // icon={FaUser}
                      placeholder={keyDataHotel}
                      value={dataHotel[keyDataHotel]}
                      onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />
                  }
                </div>
              )
            })}
            <CustomButton
              type='submit'
              textButton='Crear'
            />
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalCreateEditHotel