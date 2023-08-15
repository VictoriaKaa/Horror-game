import { Button, Container } from '@mui/material';
import './App.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store';

function App() {
  const navigate = useNavigate();
  const { maxScore } = useSelector((state: RootState) => state.questions);

  return (
    <div className="App">
      <Container maxWidth="sm" className='app-container'>
        <div>Правила
          <div className='rules'>
            <div>1. Цель: нужно выжить этой ночью</div>
            <div>2. Каждый вариант ответа может быть верным, неверным или частично верным. Частично верный дает очки</div>
            <div>3. Если вы ошиблись, вас убьют. Если вы ответили верно, вы продолжаете выживание. Если вы частично ошиблись, вы накапливаете очки выживания</div>
            <div>4. Максимальное число очков - {maxScore}</div>
            <div>Удачи!</div>
          </div>
        </div>
        <Button variant="contained" onClick={() => navigate('/main')} color="error" className='start-btn'>Start!</Button>
      </Container>
    </div>
  );
}

export default App;
