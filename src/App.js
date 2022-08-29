import './App.scss';
import cardFront from './images/bg-card-front.png';
import cardBack from './images/bg-card-back.png';
import cardLogo from './images/card-logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <section className='app-container'>
        <div className='app-column-1'>
          <div className='card-front-container'>
            <img src={cardFront} className='card-front' alt="Image of the front of a credit card" />
            <img src={cardLogo} className='card-logo' alt="Fictional logo" />
            <div className='card-number'> 0000 0000 0000 0000</div>
            <div className='cardholder'>Jane Appleseed</div>
            <div className='card-expiration'><span className='expiration-month'>00</span>/<span className='expiration-year'>00</span></div>
          </div>
          <div className='card-back-container'>
            <img src={cardBack} className='card-back' alt="Image of the back of a credit card" />
            <div className='cvc'>000</div>
          </div>
        </div>
        <div className='app-column-2'>
          <form action="" className='card-details-form'>
            <label htmlFor="cardholder-name">Cardholder Name</label><br />
            <input type="text" id='cardholder-name' name='cardholder-name' placeholder='e.g. Jane Appleseed' /><br />
            <label htmlFor="card-number">Card Number</label><br />
            <input type="text" id='card-number' name='card-number' placeholder='e.g. 1234 5678 9123 0000' /><br />
            <div className='exp-cvc-container'>
              <div className='left exp-date-container'>
                <label htmlFor="exp-date">Exp. Date (MM/YY)</label><br />
                <div className='exp-input-container'>
                  <input type="text" id='exp-month' name='exp-date' placeholder='MM' />
                  <input type="text" id='exp-year' name='exp-date' placeholder='YY' />
                </div>
              </div>
              <div className='left cvc-container'>
                <label htmlFor="">CVC</label>
                <input type="text" id='cvc' name='cvc' placeholder='e.g. 123' />
              </div>
            </div>
            <div className='clear'></div>
            <input type="submit" value='Confirm' />
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
