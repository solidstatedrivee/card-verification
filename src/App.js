import './App.scss';
import CardFrontComponent from './components/CardFrontComponent';
import CardBackComponent from './components/CardBackComponent';
import CardDetailsForm from './components/CardDetailsForm';

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
          <CardDetailsForm />
        </div>
      </section>
    </div>
  );
}

export default App;
