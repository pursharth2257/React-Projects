import './App.css';
import { NetflixHeader } from './components/netflix/netflix-header/netflix-header';
import { NetflixIndex } from './components/netflix/netflix-index/netflix-index';
import { NetflixMain } from './components/netflix/netflix-main/netflix-main';
import { NetflixRegister } from './components/netflix/netflix-register/netflix-register';

function App() {
  return (
    <div className="App">
      <NetflixIndex />
      <NetflixMain />
    </div>
  );
}

export default App;
