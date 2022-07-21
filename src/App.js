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
import { RequireAuth } from "./components";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Quizo";
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="leaderboard"
            element={
              <RequireAuth>
                <LeaderBoardPage />
              </RequireAuth>
            }
          />
          <Route
            path="/quizes/:id"
            element={
              <RequireAuth>
                <QuizPage />
              </RequireAuth>
            }
          />
          <Route path="/quiz/:id" element={<SingleQuizPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
