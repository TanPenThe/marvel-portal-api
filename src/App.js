import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from './components/Layout';
import Home from './routes/Home';
import About from "./routes/About";
import HeroDetail from './routes/HeroDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<HeroDetail/>} />
      </Route>
    </Routes>
  );
}

export default App;
