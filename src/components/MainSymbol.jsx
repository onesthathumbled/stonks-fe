import '../styles/MainSymbol.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import TuneIcon from '@mui/icons-material/Tune';

const MainSymbol = () => {
  return (
    <div className='MainSymbol'>
        <div className='Details Symbol'>
            <p className='Text Green'>AAPL</p>
            <ArrowDropDownIcon />
        </div>

        <p className='Details Price Text Green'>45905.3</p>

        <div className='Details Mark'>
            <p className='Text Gray'>Mark</p>
            <p className='SubText'>45,905.3</p>
        </div>

        <div className='Details Index'>
            <p className='Text Gray'>Index</p>
            <p className='SubText'>45,894.4</p>
        </div>

        <div className='Details Funding'>
            <p className='Text Gray'>Funding/Countdown</p>
            <p className='Orange SubText'>0.0100% 00:33:31</p>
        </div>

        <div className='Details Change'>
            <p className='Text Gray'>24h Change</p>
            <p className='Red SubText'>-1,015.6-2.16%</p>
        </div>

        <div className='Details High'>
            <p className='Text Gray'>24 High</p>
            <p className='SubText'>48,100.0</p>
        </div>

        <NavigateNextIcon className='RightArrow' />
        <TuneIcon className='Tune' />
    </div>
  )
}

export default MainSymbol