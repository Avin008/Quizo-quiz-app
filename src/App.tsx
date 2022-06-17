import { Route, Routes } from "react-router";
import "./App.css";
import {
  HomePage,
  LeaderBoardPage,
  SharedLayout,
  LoginPage,
  SignupPage,
} from "./pages";

function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="leaderboard" element={<LeaderBoardPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
