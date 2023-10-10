// Libraries
import { FaHotel, FaSwatchbook } from "react-icons/fa"
// Utils
import { pathName } from "./pathName"
// Interfaces
import { Item } from "../interfaces/itemsDashboard"

export const listItemsDashboards: Array<Item> = [
  {
    id: 1,
    text: 'HOTELES',
    icon: FaHotel,
    path: pathName.hotelsList
  },
  {
    id: 2,
    text: 'RESERVAS',
    icon: FaSwatchbook,
    path: pathName.bookingList
  }
]