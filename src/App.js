import './App.scss';
import { useState } from 'react';
import CardFrontComponent from './components/CardFrontComponent';
import CardBackComponent from './components/CardBackComponent';
import CardDetailsForm from './components/CardDetailsForm';

function App() {
  //Track states of all card input fields
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');

  //We are doing this in the parent, App.js, because these states need to go to three different child components
  //CardDetailsForm, CardFrontComponent, and CardBackComponent
  const setNameValue = (value) => {
    setName(value);
  }

  const setCardValue = (value) => {
    setCardNumber(value);
  }

  const setMonthValue = (value) => {
    setExpMonth(value);
  }

  const setYearValue = (value) => {
    setExpYear(value);
  }

  const setCvcValue = (value) => {
    setCvc(value);
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className='app-container'>
        <div className='app-column-1'>
          <CardFrontComponent
            name={name}
            cardNumber={cardNumber}
            expMonth={expMonth}
            expYear={expYear}
          />
          <CardBackComponent
            cvc={cvc}
          />
        </div>
        <div className='app-column-2'>
          <CardDetailsForm
            name={name}
            setNameValue={setNameValue}
            cardNumber={cardNumber}
            setCardValue={setCardValue}
            expMonth={expMonth}
            setMonthValue={setMonthValue}
            expYear={expYear}
            setYearValue={setYearValue}
            cvc={cvc} setCvcValue={setCvcValue}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
