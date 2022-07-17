import "./App.css";

import { Route, Routes } from "react-router";
import "./App.css";
import {
  HomePage,
  LeaderBoardPage,
  SharedLayout,
  LoginPage,
  SignupPage,
  SingleQuizPage,
  QuizPage,
} from "./pages";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setAuth } from "./redux-toolkit/features/authSlice";
import { auth } from "./firebase/firebaseConfig";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuth(user.uid));
      } else {
        dispatch(setAuth(user));
      }
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="leaderboard" element={<LeaderBoardPage />} />
          <Route path="/quizes/:id" element={<QuizPage />} />
          <Route path="/quiz/:id" element={<SingleQuizPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
