import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import { useRoutes } from 'react-router-dom';
import Routes from './Routes';

function App() {

  const myRoutes = useRoutes(Routes)

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <div className='App-main'>
        <Header></Header>

        {myRoutes}

      </div>
    </div>
  );
}

export default App;
