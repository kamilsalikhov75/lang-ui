import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { GamesPage } from "./pages/games-page/games-page";
import { HomePage } from "./pages/home-page/home-page";
import { LikesPage } from "./pages/likes-page/likes-page";
import { UserPage } from "./pages/user-page/user-page";
import { useEffect } from "react";
import { getToken } from "./localStorage/localStorage";
import { getUserThunk, userActions } from "./store/slices/user";
import { useAppDispatch, useStateSelector } from "./store/hooks";
import { getWordsThunk } from "./store/slices/word";
import { AdminPage } from "./pages/admin-page/admin-page";

function App() {
  const dispath = useAppDispatch();
  const token = useStateSelector((state) => state.user.token);
  const isAuth = useStateSelector((state) => state.user.isAuth);

  useEffect(() => {
    const token = getToken();

    if (token) {
      dispath(userActions.setToken({ token }));
    }
  }, []);

  useEffect(() => {
    if (!isAuth && token) {
      dispath(getUserThunk());
    }
  }, [token]);

  useEffect(() => {
    if (isAuth) {
      dispath(getWordsThunk());
    }
  }, [isAuth]);
  return (
    <>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/index.html" />} />
          <Route path="/index.html" element={<HomePage />} />
          <Route path="/user/:tab" element={<UserPage />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/games/:tab" element={<GamesPage />} />
          <Route path="/games/" element={<Navigate to="/games/cards" />} />
          <Route path="/admin/:tab" element={<AdminPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
