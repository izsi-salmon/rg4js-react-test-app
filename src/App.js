import React from 'react';
import ReactDOM from 'react-dom/client';
import Stack from "@mui/material/Stack";
import { capitalize } from "@mui/material";
import Button from '@mui/material/Button';
import './App.css';
import {throwAnError, throwAnotherError, capitalisationError} from './errorGeneration.js';
import {generateRandomUserDataSet} from './dataGeneration.js';

const BasicButtons = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">{capitalize("null")}</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

const fallBackUiContent = () => {
  return (
    <p>Something's gone wrong!</p>
  );
}

class RaygunErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    window.rg4js('send', {
       error: error,
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallBackUi();
    }

    return this.props.children;
  }
}

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <div className="content-box" onClick={throwAnError}>
          <h3>Generate an error</h3>
        </div>
        <div className="content-box" onClick={throwAnotherError}>
          <h3>Generate another error</h3>
        </div>

        <div className="content-box">
          <input
          type="number"
          name="numberInput"
          onBlur={(e) => {
            capitalisationError(e.target.value);
          }}
          onKeyPress={(e) => {
            if(e.key === "Enter"){
              capitalisationError(e.target.value);
            }
          }} />
        </div>

        <div className="content-box">
          <RaygunErrorBoundary fallBackUi={fallBackUiContent}>
            <BasicButtons />
          </RaygunErrorBoundary>
        </div>

        <div className="content-box" onClick={generateRandomUserDataSet}>
          <h3>Generate Customer data</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
