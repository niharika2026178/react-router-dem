import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blogs';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import StudentDelete from './Pages/StudentDelete';
import StudentDetail from './Pages/StudentDetail';
import StudentRegister from './Pages/StudentRegister';
import StudentUpdate from './Pages/StudentUpdate';
import StudentView from './Pages/StudentView';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { useLocation } from 'react-router-dom';
import LocationDisplay from './components/LocationDisplay';

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/blogs'element={<Blog/>}/>
    <Route path='/student/register'element={<StudentRegister/>}/>
    <Route path='/student/update'element={<StudentUpdate/>}/>
    <Route path='/student/delete'element={<StudentDelete/>}/>
    <Route path='/student/view'element={<StudentView/>}/>
    <Route path='/student/view/:id'element={<StudentDetail/>}/>
    <Route path='*' element={<NotFound/>}/>

   </Routes>
   <LocationDisplay/>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
