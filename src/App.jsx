import ColourList from './ColourList';

export default function App() {
  const myColours = ["Red", "Blue", "Green"];

  return (
    <div style={{ padding: '20px' }}>
      <h1>My Colour App</h1>
      <ColourList colourArray={myColours} />
    </div>
  );
}