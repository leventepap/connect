import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/login/login';
import SignupPage from './pages/signup/signup';
import ConfirmPage from './pages/confirm/confirm';
import VerifyPage from './pages/verify/verify';
import NavBar from './components/navbar/navbar';
import Test from './pages/test/test';
import Test2 from './pages/test2/test2';
import Test3 from './pages/test3/test3';
import Test4 from './pages/test4/test4';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/find" element={<Test4 />} />
          <Route path="/edit" element={<Test3 />} />
          <Route path="/profile/:userID" element={<Test2 />} />
          <Route path="/main" element={<Test />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/confirm" element={<ConfirmPage />} />
          <Route path="/verify" element={<VerifyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
