import '../App.scss'
import cardBack from '../images/bg-card-back.png';


function CardBackComponent(props) {
    return (
        <div className='card-back-container'>
            <img src={cardBack} className='card-back' alt="Image of the back of a credit card" />
            <div className='cvc'>{props.cvc ? props.cvc : '000'}</div>
        </div>
    )
}

export default CardBackComponent