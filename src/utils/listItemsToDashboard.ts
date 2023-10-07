// Libraries
import { FaBeer, FaHotel, FaSwatchbook } from "react-icons/fa"
// Utils
import { pathName } from "./pathName"
// Interfaces
import { Item } from "../interfaces/itemsDashboard"

export const listItemsDashboards: Array<Item> = [
  {
    id: 1,
    text: 'Hoteles',
    icon: FaHotel,
    path: pathName.hotelsList
  },
  {
    id: 2,
    text: 'Reservas',
    icon: FaSwatchbook,
    path: pathName.bookingList
  },
  {
    id: 3,
    text: 'Hoteles1',
    icon: FaBeer,
    path: pathName.hotelsList
  }
]