
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import './App.css';
import ContactMe from './Componenets/ContactMe';
import Hobbies from './Componenets/Hobbies';
import Aboutme from './Componenets/Aboutme';
import Home1 from './Componenets/Home1';
import Projects from './Componenets/Projects';
import Navbar from './Componenets/Navbar';
import Documentation from './Componenets/Documentation';
import Mario from './mario/Mario';

//import Projects from './Componenets/Projects';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home1/>}/>
      <Route path='/about' element={<Aboutme/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/hobbies' element={<Hobbies/>}/>
      <Route path='/contact' element={<ContactMe/>}/>
      <Route path='/documentation' element={<Documentation/>}/>
      <Route path='/mario' element={<Mario/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
