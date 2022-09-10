import '../App.scss'
import cardFront from '../images/bg-card-front.png'
import cardLogo from '../images/card-logo.svg'

function CardFrontComponent(props) {

  return (
    <div className='card-front-container'>
      <img src={cardFront} className='card-front' alt="Image of the front of a credit card" />
      <img src={cardLogo} className='card-logo' alt="Fictional logo" />
      <div className='card-number'> {props.cardNumber ? props.cardNumber : '0000 0000 0000 0000'}</div>
      <div className='cardholder'>{props.name ? props.name : 'Jane Appleseed'}</div>
      <div className='card-expiration'>
        <span className='expiration-month'>{props.expMonth ? props.expMonth : '00'}</span>/
        <span className='expiration-year'>{props.expYear ? props.expYear : '00'}</span>
      </div>
    </div>
  )
}

export default CardFrontComponent