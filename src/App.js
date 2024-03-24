import './App.css';
import SideBar from './components/SideBar/SideBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Resume from './components/Resume/Resume';
import Portifolio from './components/Portifolio/Portifolio';
import Testmonials from './components/Testmonials/Testmonials';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Alert from './components/Alert/Alert';
import Chatbot from './components/Chatbot/Chatbot';




function App() {
  return (
    <div>
        <Alert />
        <SideBar/>
      <main className='main'>
        <Home/>
        <About/>
        <Services/>
        <Resume/>
        <Portifolio/>
        <Testmonials/>
        <Blog/>
        <Contact/>
        <Chatbot/>
        
      </main>
      <Footer/>
        
    </div>
  );
}

export default App;
