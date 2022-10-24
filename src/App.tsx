import React from 'react';
import Button from './components/Button';
import Playground from './components/Playground';

function App() {
  return (
    // <div className="App">
    //   <Button text="Click me" />
    // </div>
    <Playground>
      <Button text="Click me" />
    </Playground>
  );
}

export default App;
