// Libraries
import { FaBeer, FaHotel, FaSwatchbook } from "react-icons/fa"
import { MdBedroomParent } from "react-icons/md"
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
  },
  {
    id: 3,
    text: 'HABITACIONES',
    icon: MdBedroomParent,
    path: pathName.hotelsList
  }
]