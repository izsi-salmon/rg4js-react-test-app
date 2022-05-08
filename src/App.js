import './App.css';
import {throwAnError, throwAnotherError} from './errorGeneration.js';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <div className="content-box" onClick={throwAnotherError}>
          <h3>Generate an error</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
