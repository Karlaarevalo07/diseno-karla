import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Secction';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Main />
      <Section />
      {/* puedes agregar más secciones aquí */}
      <Footer />
    </div>
  );
}

export default App;
