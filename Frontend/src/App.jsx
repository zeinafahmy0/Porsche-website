import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import About from './pages/About/About';


export default function App() {
  return (
    <>
      <Navbar />
      <Register />
      <Login />
      <About />
      <Footer />
    </>
  )
}