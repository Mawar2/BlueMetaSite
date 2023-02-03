import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Contact } from "./components/Contact";
import { Wins } from "./components/Wins";
import { Serve } from "./components/Service";
import { ImageSlider } from "./components/ImageSlider";
import { SliderData } from './components/SliderData';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


//C:\Users\angel\vs codeFiles\personal-portfolio\node_modules\bootstrap\dist\css\bootstrap.min.css
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Serve/>
      <Wins />
      <ImageSlider slides = {SliderData}/>
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
