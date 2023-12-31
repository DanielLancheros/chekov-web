import { useState, createContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './app/login/page';
import SignUp from './app/signup/page';
import ToDo from './app/page';
import './App.css';

export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState();

  const _setUser = (data) => {
    sessionStorage.setItem("user", JSON.stringify(data));
    setUser(data);
  }
  
  useEffect(() => {
    if(!user) {
      //look to see if user was stored in session data:
      const previousUSer = sessionStorage.getItem("user");
      if(previousUSer) {
      //if so, let's set state back to that user:
        setUser(JSON.parse(previousUSer));
      }
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser: _setUser }}>
      <BrowserRouter>
        <Routes>
          < Route path = "/login" element={<Login/>} />
          < Route path = "/signup" element={<SignUp/>} />
          < Route path = "/" element={user ? <ToDo /> : <Login/>} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
