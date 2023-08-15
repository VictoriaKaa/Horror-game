import { Button } from "@mui/material";
import "./EndPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { GameStatus, setScore } from "../../store/features/questions";
import { useEffect } from "react";
import { useAppDispatch } from "../../app/hooks";

const EndPage = () => {
    const { status, score } = useSelector((state: RootState) => state.questions);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (score) {
            dispatch(setScore(-score));
        }
    }, [dispatch, score]);

    return (
        <div className='app-container end-page-container'>
            {(status === GameStatus.FAIL) && <div className="end-page fail">
                GAME OVER
            </div>}
            {(status === GameStatus.WIN) && <div className="end-page win">
                VICTORY
            </div>}
            <Button variant="contained" onClick={() => navigate('/')}
                color={(status === GameStatus.FAIL) ? "error" : (status === GameStatus.WIN) ? 'success' : 'info'}>Go to Start Page</Button>
        </div>
    );
};

export default EndPage;
