import './App.css';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";
import Members from './pages/Members/members';
import MemberCreate from './pages/Admin/MemberAdmin/Create/create';
import MemberView from './pages/Admin/MemberAdmin/View/view';
import Member from './pages/Admin/MemberAdmin/List/list';


function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/members" element={<Members/>}></Route>
        <Route path="/create" element={<MemberCreate/>}></Route>
        <Route path="/view" element={<MemberView/>}></Route>
        <Route path="/list" element={<Member/>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
