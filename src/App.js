import { Route, Routes } from 'react-router-dom';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/HomePage/Home/Home';
import BreakFast from './Pages/HomePage/Menu/Breakfast/BreakFast';
import Launch from './Pages/HomePage/Menu/Launch/Launch';
import Dinner from './Pages/HomePage/Menu/Dinner/Dinner';
import Header from './Pages/Shared/Header/Header';
import LogIn from './Pages/LoginPage/LogIn/LogIn';
import About from './Pages/About/About';
import Footer from './Pages/Footer/Footer';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/breakfast" element={<BreakFast />}></Route>
          <Route path="/launch" element={<Launch />}></Route>
          <Route path="/dinner" element={<Dinner />}></Route>
        </Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/about" element={<About />}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
