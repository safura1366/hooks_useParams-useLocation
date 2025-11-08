import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import UserIndex from "./pages/users/Index";
import {BrowserRouter,Routes,Route} from "react-router";
import UserShow from "./pages/users/Show";
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/users" element={<UserIndex/>}/>
          {/* urlparams */}
            <Route path="/users/:id" element={<UserShow/>}/> 
            <Route path="*" element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
