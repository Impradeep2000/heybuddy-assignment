import { BrowserRouter, Route,Routes } from 'react-router-dom';
import './App.css';
import CreateAccountPage from './Pages/CreateAccount';
import SignUpPage from './Pages/SignUp';
import LoginPage from './Pages/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/create-account' element={<CreateAccountPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
