
import { Route, Routes } from 'react-router-dom'
import './App.css';
import {Dashboard} from './Dashboard';

function App() {
  return(
    <Routes>
      <Route index element={<Dashboard />} ></Route>
    </Routes>
  )
  
  

  
}

export default App;
