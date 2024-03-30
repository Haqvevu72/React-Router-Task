import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Films from './Components/Films';
import People from './Components/People';
import Home from './Components/Home';
import Planets from './Components/Planets';
import Species from './Components/Species';
import Vehicles from './Components/Vehicles';
import Starships from './Components/Starships';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path = '/' element = { <Home/> }></Route>
        <Route path = '/films' element = { <Films/> }></Route>
        <Route path = '/people' element = { <People/> }></Route>
        <Route path = '/planets' element = { <Planets/> }></Route>
        <Route path = '/species' element = { <Species/> }></Route>
        <Route path = '/vehicles' element = { <Vehicles/> }></Route>
        <Route path = '/starships' element = { <Starships/> }></Route>
      </Routes> 
    </div>
  );
}

export default App;
