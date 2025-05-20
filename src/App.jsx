
import './App.css'
import Sidebar from './Layout/Sidebar';
import Home from './Pages/Homepage';
import Myday from './Pages/MyDay';

function App() {
  return (
    <div className='flex flex-row'>
  <Sidebar/>
  <Myday/>
    </div>
  );
}

export default App
