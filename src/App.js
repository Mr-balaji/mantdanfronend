import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AddForm } from './pages/addform';
import SignIn from './pages/sign-in';
import Tables from './pages/tables';
import { Filter } from './pages/filter';

function App() {
  return (
  <>
     <BrowserRouter>
    <Routes >
      <Route path="/addfromdata" element={<AddForm />}  />
      <Route path="/addform/:id" element={<AddForm />}  />
      <Route path="/signin" element={<SignIn />}  />
      <Route path="*" element={<SignIn />}  />
      <Route path="/tables" element={<Tables />}  />
      <Route path="/filters" element={<Filter />}  />

    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
