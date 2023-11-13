import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddForm } from './component/addform';
import Tables from './component/tables';

function App() {
  return (
  <>
     <BrowserRouter>
    <Routes >
      <Route path="/addfromdata" element={<AddForm />}  />
      <Route path="/addform/:id" element={<AddForm />}  />

      <Route path="/tables" element={<Tables />}  />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
