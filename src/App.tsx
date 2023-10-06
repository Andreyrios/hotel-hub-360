// Views
import Main from "./views/Main/Main";
import Login from "./views/Login/Login";
// Utils
import { pathName } from "./utils/pathName";
import ActiveSession from "./utils/privateRoutes/activeSession";
// Libraries
import { Route, Routes, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<ActiveSession />} >
            <Route path={pathName.inicio} element={<Main />} />
          </Route>
          <Route path={pathName.login} element={<Login />} />
          <Route path='*' element={<p>No se encontró la url</p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;