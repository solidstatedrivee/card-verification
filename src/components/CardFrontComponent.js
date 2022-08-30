import '../App.scss'
import cardFront from '../images/bg-card-front.png'
import cardLogo from '../images/card-logo.svg'

function CardFrontComponent() {
  return (
    <div className='card-front-container'>
      <img src={cardFront} className='card-front' alt="Image of the front of a credit card" />
      <img src={cardLogo} className='card-logo' alt="Fictional logo" />
      <div className='card-number'> 0000 0000 0000 0000</div>
      <div className='cardholder'>Jane Appleseed</div>
      <div className='card-expiration'><span className='expiration-month'>00</span>/<span className='expiration-year'>00</span></div>
    </div>
  )
}

export default CardFrontComponent