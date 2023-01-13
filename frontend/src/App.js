import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import LandingPage from './components/landingPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <br/>
      <LandingPage />
      <br/>
      <Footer />
    </div>
  );
}

export default App;
