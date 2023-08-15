import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchQuestions } from "./questionsAPI";

export interface Answer {
    answer: string;
    isCorrect: boolean;
    comment: string;
    score?: number;
}

export interface Question {
    question: string;
    answers: Answer[];
}

export enum GameStatus {
    'IN_PROGRESS',
    'WIN',
    'FAIL',
}

export interface QuestionsState {
    questions: Question[];
    status: GameStatus,
    score: number;
    loading: boolean;
    error: string;
    maxScore: number;
}

const initialQuestionState: QuestionsState = {
    questions: [],
    status: GameStatus.IN_PROGRESS,
    score: 0,
    loading: false,
    error: '',
    maxScore: 3
}

const questionsSlice = createSlice({
    initialState: initialQuestionState,
    name: "questions",
    reducers: {
        setQuestions: (state: QuestionsState, action) => {
            state.questions = [...action.payload];
        },
        setStatus: (state: QuestionsState, action) => {
            state.status = action.payload;
        },
        setScore: (state: QuestionsState, action) => {
            state.score += action.payload;
        },
        setLoading: (state: QuestionsState, action) => {
            state.loading = action.payload;
        },
        setError: (state: QuestionsState, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getQuestions.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getQuestions.fulfilled, (state, action) => {
                state.questions = [...action.payload];
                state.loading = false;
            })
            .addCase(getQuestions.rejected, (state, action) => {
                setError(action.error);
                state.loading = false;
            })
    },
});

export const { setQuestions, setStatus, setScore, setLoading, setError } = questionsSlice.actions;

export const getQuestions = createAsyncThunk(
    'questions/fetchQuestion',
    async () => {
        const response = await fetchQuestions();
        return response.data;
    }
)

export default questionsSlice.reducer;
