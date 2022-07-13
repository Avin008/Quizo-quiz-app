import "./App.css";
import Mockman from "mockman-js";

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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="leaderboard" element={<LeaderBoardPage />} />
          <Route path="/quizes/:category" element={<QuizPage />} />
          <Route path="/quiz/:id" element={<SingleQuizPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
      {/* <Mockman colorScheme="white" /> */}
    </div>
  );
}

export default App;
