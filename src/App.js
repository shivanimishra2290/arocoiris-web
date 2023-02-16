import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import About from './Component/About';
import Home from './Component/Home';
import Contact from './Component/Contact';
import CourseDetails from './Component/CourseDetails';

function App() {
  return (
    <>
    <BrowserRouter> 
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<CourseDetails  />}/>

        <Route path="/contact"element={<Contact/>} />
       
      </Routes>
    </BrowserRouter>
    
    </>

  );
}

export default App;
