
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Ingridients from './components/Ingridients';
import Vitamins from './components/Vitamins';
import LatestNews from './components/LatestNews';


function App() {
  return (
    <div className="App">
      <Header/>
      <Vitamins/>
      <Ingridients/>
      <LatestNews/>
      <Footer/>
    </div>
  );
}

export default App;
