import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Books from './pages/BookContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
