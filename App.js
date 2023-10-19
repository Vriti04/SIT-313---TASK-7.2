import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './login';  
import SignupPage from './signup';
import HomePage from './home page'



function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path='/signup' element={<SignupPage />} />

                    <Route path="/" element={
                        <HomePage/>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
