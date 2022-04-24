import VendingMachine from './VendingMachine';
import Navbar from './Navbar';
import Soda from './Soda';
import Chips from './Chips';
import Candy from './Candy';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Navbar />
         <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/soda" element={<Soda />} />
            <Route path="/chips" element={<Chips />}/>
            <Route path="/candy" element={<Candy />}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
