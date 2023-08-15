import { CircularProgress } from '@mui/material';
import './Loader.css'

export const Loader = () => {
    return (
        <div className='loaderWrapper'>
            <CircularProgress className='loader' />
        </div>
    )
}