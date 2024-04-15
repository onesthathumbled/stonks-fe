import { Link } from 'react-router-dom';
import '../styles/Trade.css'
import TuneIcon from '@mui/icons-material/Tune';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InfoIcon from '@mui/icons-material/Info';

const Trade = () => {
  return (
    <div className="Trade">
        <div className='Top'>
           <div>
            <button>Cross</button>
            <button>20x</button>
           </div>
            <div>
                <TuneIcon className='Tune' />
            </div>
        </div>

        <div className='Mid'>
           <div className='Inside'>
                <Link className='Text Tr'>Limit</Link>
                <Link className='Text Tr Market'>Market</Link>
                <div className='Inside-2'>
                    <Link className='Text'>Stop Limit</Link>
                    <ArrowDropDownIcon className='Icon' />
                </div>
           </div>

           

            <div>
                <InfoIcon className='Icon' />
            </div>
        </div>

        <div className='Form'>
            <form>
                <div className='Price'>
                    <label>Price</label>
                    <input type='number' value={32123.25} readOnly />
                </div>

                <div className='Bottom'>
                    <button className='Buy'>Buy/Long</button>
                    <button className='Sell'>Sell/Short</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Trade