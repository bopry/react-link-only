function App() {
  const [color, setColor] = React.useState('red');

  return (
    <h1
      style={{ backgroundColor: color }}
      onClick={() => setColor(color === 'red' ? 'blue' : 'red')}
    >
      Привет)
    </h1>
  );
}
