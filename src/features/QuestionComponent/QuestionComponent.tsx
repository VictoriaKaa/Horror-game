import "./QuestionComponent.css";
import { Question } from "../../store/features/questions";
import PathOption from "../PathOption/PathOption";

interface QuestionComponentProps {
    question: Question,
    playerScore: number,
    maxScore: number,
    isClicked: boolean,
    setIsRightChoice: (param: boolean) => void,
    setIsClicked: (param: boolean) => void,
}

const QuestionComponent = ({ question, playerScore, maxScore, isClicked, setIsRightChoice, setIsClicked }: QuestionComponentProps) => {
    return (
        <div className="main-question">
            <div className="question">{question.question}</div>
            {question.answers.map((answerItem, num) => <PathOption key={answerItem.answer + num + answerItem.comment}
                answer={answerItem.answer}
                playerScore={playerScore}
                maxScore={maxScore}
                score={answerItem?.score}
                isCorrect={answerItem.isCorrect}
                comment={answerItem.comment}
                isClicked={isClicked}
                setIsSelected={setIsRightChoice}
                setIsClicked={setIsClicked}
            />)}
        </div>
    );
};

export default QuestionComponent;
