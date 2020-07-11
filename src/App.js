import React from 'react';
import './App.css';
import Routes from "./routes";
import { Theme } from './Theme';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
    <div className="App"> 
     <Routes/>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
