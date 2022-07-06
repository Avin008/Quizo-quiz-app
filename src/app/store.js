import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "../features/toggle-theme/toggle-theme-slice";
import categoryData from "../features/categorySlice/categorySlice";
import quizSlice from "../features/quizSlice/quizSlice";
import singleQuizSlice from "../features/singleQuizSlice/singleQuizSlice";
import questionSlice from "../features/questionSlice/questionSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    category: categoryData,
    quiz: quizSlice,
    singleQuiz: singleQuizSlice,
    question: questionSlice,
  },
});
