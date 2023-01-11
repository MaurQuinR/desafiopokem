import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Detalle from "./views/Detalle";
import NoEncontrada from "./views/NoEncontrada";
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:nombre" element={<Detalle />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;