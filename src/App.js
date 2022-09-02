import './App.scss';
import CardFrontComponent from './components/CardFrontComponent';
import CardBackComponent from './components/CardBackComponent';
import CardDetailsForm from './components/CardDetailsForm';
import CompleteStateComponent from './components/CompleteStateComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <section className='app-container'>
        <div className='app-column-1'>
          <CardFrontComponent />
          <CardBackComponent />
        </div>
        <div className='app-column-2'>
          {/* TOGGLE CARDETAILSFORM AND COMPLETESTATECOMPONENT TO VIEW STATES FOR NOW */}
          <CardDetailsForm />
          {/* <CompleteStateComponent /> */}
        </div>
      </section>
    </div>
  );
}

export default App;
