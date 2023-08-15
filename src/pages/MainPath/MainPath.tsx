import { ReactElement, useCallback, useEffect, useState } from "react";
import { Alert, Button, Container } from "@mui/material";
import { useSelector } from "react-redux";
import "./MainPath.css";
import { RootState } from "../../store";
import { GameStatus, Question, getQuestions, setStatus } from "../../store/features/questions";
import { useAppDispatch } from "../../app/hooks";
import QuestionComponent from "../../features/QuestionComponent/QuestionComponent";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../features/Loader/Loader";

const MainPath = () => {
    const { questions, maxScore, score, loading, error } = useSelector((state: RootState) => state.questions);
    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [questionsList, setQuestionsList] = useState<Question[]>([]);
    const [isRightChoice, setIsRightChoice] = useState<boolean>();
    const [isClicked, setIsClicked] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getQuestions());
    }, [dispatch])

    useEffect(() => {
        questions.length && setQuestionsList(questions);
    }, [questions])

    const goToNextQuestion = (): void => {
        if (questionNumber + 1 < questionsList.length) {
            setQuestionNumber(questionNumber => questionNumber + 1);
            setIsClicked(false);
            setIsRightChoice(undefined);
        } else {
            dispatch(setStatus(GameStatus.WIN));
            navigate('/end');
        }
    }

    const goToEndPage = (): void => {
        dispatch(setStatus(GameStatus.FAIL));
        navigate('/end');
    }
    const showButton = (): ReactElement => {
        if (isRightChoice) {
            if (score < maxScore) {
                return <Button variant="contained" onClick={goToNextQuestion} color="success">Continue</Button>
            }
        }
        return <Button variant="contained" onClick={() => goToEndPage()} color="error">Game Over!</Button>
    }

    const getCurrentQuestion = useCallback(() => {
        return <QuestionComponent question={questionsList[questionNumber]}
            playerScore={score}
            maxScore={maxScore}
            isClicked={isClicked}
            setIsRightChoice={setIsRightChoice}
            setIsClicked={setIsClicked} />
    }, [questionsList, questionNumber, isClicked])

    return (
        <>
            {questionsList.length && <Container maxWidth="sm" className='main-container app-container'>
                <div className="score">Your score: {score}</div>
                {getCurrentQuestion()}
                {isClicked && showButton()}
            </Container>}
            {loading && <Loader />}
            {error && <Alert severity="success" color="info">
                Error: {error}
            </Alert>}
        </>
    );
};

export default MainPath;
