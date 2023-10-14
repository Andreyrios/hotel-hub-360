// Styles
import styles from './FormSearch.module.css'
// Interfaces
import { QuerySearch } from '../../../../interfaces/generalInterfaces'
import { Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

interface Props {
  handleChange: (name: string, value: string) => void
  querySearch: QuerySearch
}

function FormSearch({ handleChange, querySearch }: Props) {
  const today = new Date().toISOString().substr(0, 10);

  return (
    <div className={styles.containerForm}>
      <form className={styles.form} action="">
        <label className={styles.label}>
          Desde <br />
          <input
            type="date"
            min={today}
            name='checkIn'
            className={styles.input}
            value={querySearch.checkIn}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Hasta <br />
          <input
            type="date"
            name='checkOut'
            className={styles.input}
            min={querySearch.checkIn}
            value={querySearch.checkOut}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <label className={styles.label}>
          Ciudad <br />
          <input
            type="text"
            name='city'
            placeholder='ciudad'
            className={styles.input}
            value={querySearch.city}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <label className={styles.label} title='Numero de personas'>
          Huespedes <br />
          <input
            type="number"
            name='guestsQuantity'
            className={styles.input}
            placeholder='Numero de huespedes'
            value={querySearch.guestsQuantity}
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </label>
        <Button type='submit' variant='success'>
          <FaSearch /> Buscar
        </Button>
      </form>
    </div>
  )
}

export default FormSearch