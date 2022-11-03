import './App.css';
import Weather from './Weather';

export default function App() {
  return (
<div className='App'>
      <Weather genericCity="Prague"/>
      
      <footer className="mb-3" >
      <a href='https://github.com/vicmoon/react-my-weather' target="_blank" rel="noreferrer">Open source code</a> by  
      <a href="http://victoriamunteanuportfolio.net/" target="_blank" rel="noreferrer"> Victoria Munteanu</a> 
      
      </footer>
  
</div>

  );
}


