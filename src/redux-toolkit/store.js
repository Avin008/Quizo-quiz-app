import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import categorySlice from "./features/categorySlice";
import leaderboardSlice from "./features/leaderboardSlice";
import quizzesSlice from "./features/quizzesSlice";
import scoreSlice from "./features/scoreSlice";
import singleQuizSlice from "./features/singleQuizSlice";
import themeSlice from "./features/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    category: categorySlice,
    quizzes: quizzesSlice,
    singleQuiz: singleQuizSlice,
    score: scoreSlice,
    leaderboard: leaderboardSlice,
    themeSlice: themeSlice,
  },
});
