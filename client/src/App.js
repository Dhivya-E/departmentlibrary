
import Book from './pages/book'
import Nav from './components/nav'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
  return (
    <>    
        <Nav/>   
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/book" element={<Book/>} />             
            </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
