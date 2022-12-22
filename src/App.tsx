// import React from 'react';
import * as React from 'react';
import { styled } from '@mui/system';
import { createTheme } from '@mui/material/styles';
import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";



const theme = createTheme({
  status: {
    // danger: orange[500],
  },
});

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}


const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
<MyComponent>Styled div</MyComponent>
<Button variant="contained">Hello World</Button>
<Slider
  defaultValue={30}
  sx={{
    width: 300,
    color: 'success.main',
    '& .MuiSlider-thumb': {
      borderRadius: '1px',
    },
  }}
/>
    </div>
  );
}

export default App;
