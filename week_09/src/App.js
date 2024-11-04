import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import MeInformatin from './components/MeInformatin';
import { useState } from 'react';

function App() {
  const [name,setName] = useState("Elio")
  const [id,setId] = useState("101410182")
  return (
    <div className="App">
      <header className="App-header">
        <div className='image-div'>
        <img style={{width:'800px'}} src={logo} className="App-logo" alt="logo" />
        </div>
        <Welcome/>
        <MeInformatin name={name} id={id}/>
        </header>
    </div>
  );
}

export default App;
