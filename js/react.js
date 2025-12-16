const root = document.getElementById('root');

function App() {
  const [color, setColor] = React.useState('red');

  return (
    <h1
      style={{ color }}
      onClick={() => setColor(color === 'red' ? 'blue' : 'red')}
    >
      Привет)
    </h1>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

