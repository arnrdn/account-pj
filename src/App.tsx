import { Routes, Route } from 'react-router-dom';
import Contacts from './pages/Contacts';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
