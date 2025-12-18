




/////////////////////////////////////////////////////

function Header() {
  const [about, setAbout] = React.useState('n');
  return (
    <ul>
      <li onClick={()=>setAbout(about === 'n' ? 'y' : 'n')} style={{color : about === 'n' ? 'red' : 'blue'}}>About</li>
      <li>Main</li>
      <li>Contacts</li>
    </ul>
  );
}

function Main() {

  return;
}

function Footer() {

  return;
}

/////////////////////////////////////////////////////////

function App() {
  const [text, setText] = React.useState('Hello');

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));