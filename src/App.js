import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import CharacterPage from './pages/CharacterPage/CharacterPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='container'>
          <h1>HELLO ŚMIERTELNICY, JESTEM NA KAŻDEJ PODSTRONIE</h1>
          {/* navbar całej strony */}
        </div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/character/:id' element={<CharacterPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
