import './App.css';
import Header from './components/Header';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Tokenomics />
      <Footer />
    </div>
  );
}

export default App;