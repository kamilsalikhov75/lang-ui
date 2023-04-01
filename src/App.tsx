import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { GamesPage } from './pages/games-page/games-page';
import { HomePage } from './pages/home-page/home-page';
import { LikesPage } from './pages/likes-page/likes-page';
import { UserPage } from './pages/user-page/user-page';

function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/index.html" element={<HomePage />} />
          <Route path="/user/:tab" element={<UserPage />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/games/:tab" element={<GamesPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
