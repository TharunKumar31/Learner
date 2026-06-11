import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './Components/Home/home';
import { About } from './Components/Home/About/about';
import { Courses } from './Components/Courses/courses';
import { Instructors } from './Components/Instructors/instructors';
import { Enroll } from './Components/Enroll/enroll';
import { EnrollUpdate } from './Components/EnrollUpdate/enrollupdate';
import { EnrollDetails } from './Components/EnrollDetails/enrolldetails';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/courses' element={< Courses/>}/>
    <Route path='/instructor' element={< Instructors/>}/>
    <Route path='/enroll' element={< Enroll/>}/>
    <Route path='/enrollupdate/:id'element={<EnrollUpdate/>}/>
    <Route path='/enrolldetails' element={<EnrollDetails/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
