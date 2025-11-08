import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserIndex from "./pages/users/Index";
import {BrowserRouter,Routes,Route, Navigate} from "react-router";
import UserShow from "./pages/users/Show";
import { useState } from "react";
function App() {
  const [login,setLogin]=useState(true)
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={login ? <UserIndex/> :<Navigate to ="/"/>}/>
          {/* urlparams */}
            <Route path="/users/:id" element={<UserShow/>}/> 
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
