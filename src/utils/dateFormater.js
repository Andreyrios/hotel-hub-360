import moment from 'moment';

const months = {
    '0' :'enero',
    '1'	:'febrero',
    '2'	:'marzo',
    '3'	:'abril',
    '4'	:'mayo',
    '5'	:'junio',
    '6'	:'julio',
    '7'	:'agosto',
    '8'	:'septiembre',
    '9'	:'octubre',
    '10':'noviembre',
    '11':'diciembre',
  }
  
  export function dateFormater(date, withHour) {
    let dateParse = moment(date)
    let dateP = dateParse.date()
    let month = months[dateParse.month()]
    let year = dateParse.year()
    let hour = dateParse.format('hh:mm a')
    let fechaResult = `${dateP} de ${month} de ${year}`
    let fechaResultWithHour = `${dateP} de ${month} de ${year} - ${hour}`
    let fechaDef = withHour ? fechaResultWithHour : fechaResult
  
    return fechaDef
  }

  export function reducedDateFormat(date, withHour) {
    let dateParse = moment(date)
    let dateP = dateParse.format('YYYY-MM-DD')
    let hour = dateParse.format('hh:mm a')
    let fechaResult = `${dateP}`
    let fechaResultWithHour = `${dateP} - ${hour}`
    let fechaDef = withHour ? fechaResultWithHour : fechaResult

    return fechaDef 
  }
  
