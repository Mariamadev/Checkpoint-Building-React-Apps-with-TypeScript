import React from 'react';

// Définir une interface pour les props du composant
interface GreetingProps {
  name: string;
}

// Composant fonctionnel typé en TypeScript
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Bonjour, {name}!</div>;
};

export default Greeting;
