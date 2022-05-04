import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Cadastro from './components/cadastro';
import ListaUsuario from './components/ListaUsuario';

function App() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/user')
      .then((response) => response.json())
      .then((json) => setUser(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(users);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Cadastro />} />
        <Route path="/lista" element={<ListaUsuario user={users} />} />
      </Routes>
    </Router>
  );
}

export default App;
