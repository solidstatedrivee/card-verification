import './App.scss';
import { useState } from 'react';
import CardFrontComponent from './components/CardFrontComponent';
import CardBackComponent from './components/CardBackComponent';
import CardDetailsForm from './components/CardDetailsForm';
import CompleteStateComponent from './components/CompleteStateComponent';

function App() {
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [expYear, setExpYear] = useState('');
  const [cvc, setCvc] = useState('');

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
          {/* TOGGLE CARDETAILSFORM AND COMPLETESTATECOMPONENT TO VIEW STATES FOR NOW */}
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
          {/* <CompleteStateComponent /> */}
        </div>
      </section>
    </div>
  );
}

export default App;
