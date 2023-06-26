import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Free from './components/Free';
import Part2 from './components/Part2';
import Price from './components/Price';
import Footer from './components/Footer';


function App() {
  return (
    <div className='App'>
      <Navbar />
      <About />  
      <Free />
      <Part2 />
      <Price />
      <Footer />    
    </div>
  );
}

export default App;
