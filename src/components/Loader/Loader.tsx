import { useState } from 'react';
// Styles
import styles from './Loader.module.css'
// Libraries
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';

interface Props {
  show: boolean
}

function Loader({ show }: Props) {

  return (
    <>
      <Modal
        size="sm"
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body
          className='text-center'
          style={{ background: 'var(--PRIMARY-COLOR)', borderRadius: '6.5px' }}
        >
          <Spinner animation="grow" variant="success" /> <br />
          <span className={styles.text}>
            ¡Casi listo! Un momento por favor...
          </span>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Loader