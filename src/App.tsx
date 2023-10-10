// Utils
import { pathName } from "./utils/pathName";
import ActiveSession from "./utils/privateRoutes/activeSession";
// Libraries
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
// Views
import Main from "./views/Main/Main";
import Login from "./views/Login/Login";
import HotelsList from "./views/HotelsList/HotelsList";
import BookingsList from "./views/BookingsList/BookingsList";
import RoomsList from "./views/RoomsList/RoomsList";

function App() {

  return (
    <BrowserRouter>
      <Loader show={false} />
      <Header />
      <Routes>
        <Route element={<ActiveSession />} >
          <Route path={pathName.main} element={<Main />} />
          <Route path={pathName.hotelsList} element={<HotelsList />} />
          <Route path={pathName.bookingList} element={<BookingsList />} />
          <Route path={pathName.roomsList} element={<RoomsList />} />
        </Route>
        <Route path={pathName.login} element={<Login />} />
        <Route path='*' element={<p>No se encontró la url</p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;