import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Books from './pages/Books';
import BookList from './components/BookList';
import Categories from './pages/Categories';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
