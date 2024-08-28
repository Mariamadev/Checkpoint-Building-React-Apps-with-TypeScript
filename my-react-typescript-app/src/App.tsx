import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';

// Composant racine de l'application
const App: React.FC = () => {
  return (
    <div>
      <h1>My React TypeScript App</h1>
      <Greeting name="John Doe" />
      <Counter />
    </div>
  );
};

export default App;