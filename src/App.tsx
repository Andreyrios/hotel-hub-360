// Utils
import { pathName } from "./utils/pathName";
import ActiveSession from "./utils/privateRoutes/activeSession";
// Libraries
import { Route, Routes, BrowserRouter } from "react-router-dom";
// Views
import Main from "./views/Main/Main";
import Login from "./views/Login/Login";
import HotelsList from "./views/HotelsList/HotelsList";
import BookingsList from "./views/BookingsList/BookingsList";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ActiveSession />} >
          <Route path={pathName.main} element={<Main />} />
          <Route path={pathName.hotelsList} element={<HotelsList />} />
          <Route path={pathName.bookingList} element={<BookingsList />} />
        </Route>
        <Route path={pathName.login} element={<Login />} />
        <Route path='*' element={<p>No se encontró la url</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;