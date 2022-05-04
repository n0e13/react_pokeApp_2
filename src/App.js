
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './containers/Header';
import Main from './containers/Main';
import Footer from './containers/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
