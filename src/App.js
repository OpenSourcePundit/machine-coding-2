import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import {HomePage} from './pages/HomePage';
import {ArchivePage} from './pages/ArchivePage';


function App() {
  return (
    <div className="App">
      hello shashank
      <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/archive" element={<ArchivePage/>}/>
      </Routes>

      
    </div>
  );
}

export default App;
