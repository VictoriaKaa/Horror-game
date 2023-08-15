import { useEffect, useState } from "react";
import "./PathOption.css";
import { useAppDispatch } from "../../app/hooks";
import { setScore } from "../../store/features/questions";

interface PathOptionProps {
    answer: string,
    score?: number,
    playerScore: number,
    maxScore: number,
    isCorrect: boolean,
    isClicked: boolean,
    comment: string,
    setIsSelected: (param: boolean) => void,
    setIsClicked: (param: boolean) => void,
}

const PathOption = ({answer, score, playerScore, maxScore, isCorrect, isClicked, comment, setIsSelected, setIsClicked}: PathOptionProps) => {
    const [isClickedComment, setIsClickedComment] = useState<boolean>();
    const dispatch = useAppDispatch();

    useEffect(() => {
        setIsClickedComment(false);
    }, [answer])

    const onOptionClick = (): void => {
        if (!isClicked) {
            setIsClicked(true);
            setIsClickedComment(true);
            setIsSelected(isCorrect);
            score && dispatch(setScore(score));
        }
    }

    const getStyleColor = (): string => {
        if (isClickedComment) {
            if (isCorrect) {
                if (score) {
                    return "middle";
                } else {
                    return "correct";
                }
            } else {
                return "incorrect";
            }
        } else {
            return "";
        }
    }

    const getComment = (): string => {
        if (playerScore >= maxScore) {
            return 'Вы проиграли!';
        }
        return comment;
    }

    return (
        <div className="option" onClick={onOptionClick}>
            {answer}
            {isClickedComment && <div className={`${getStyleColor()}`}>{getComment()}</div>}
        </div>
    );
};

export default PathOption;
