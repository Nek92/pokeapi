import { Route, Routes} from 'react-router-dom';
import Pokedex from '../src/componentes/pages/app/Pokedex.jsx';
import Equipo from '../src/componentes/pages/equipo-pokemon/equipo';
import Error from '../src/componentes/pages/Error';
import Navbar from '../src/componentes/pages/nav/nav';
import LoginButton from '../src/componentes/pages/login/login'
// import "index.css";

function App () {

  return (
    <>
    <Navbar/>
    <Routes>
    {/* <Route path="/" render = {() => <Navbar />} /> */}   
    <Route path="/equipo" element={<Equipo/>}></Route>
    <Route path="/login" element={ <LoginButton/>}></Route>
    <Route exact path="/pokedex" element={<Pokedex />}></Route>
    </Routes>
    </>
  )
};

export default App;
