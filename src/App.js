import React from 'react';
import Calculator from './components/Calculator';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <React.Fragment>
      <Helmet>
        <title>React-Calculator</title>
        <meta name="description" content="React Calculator build with Redux" />
        <meta name="author" content="developed by gichul jaun" />
      </Helmet>
      <Calculator />
    </React.Fragment>
  );
}

export default App;
