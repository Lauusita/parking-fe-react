
import Main from './components/main/Main';
import FormCliente from './components/clients/Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/home"/>
        <Route path="/form-clients" element={<FormCliente/>}/>
      </Routes>
    </Router>
  );
}

export default App;