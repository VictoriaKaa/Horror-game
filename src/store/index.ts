import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./features/questions";

export const store = configureStore({
  reducer: {
    questions: questionsReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;