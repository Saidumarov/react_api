
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import './App.css';
import { Linkpage } from "./Linkpage";
import Posts from "./Posts";
import Postsingle from "./Postsingle";

function App() {


  return (
    <div className="App">
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Linkpage />} >
         <Route index element={<Posts />} />
         <Route  path="/post/roduct/single/:id"  element={<Postsingle /> }/>
       </Route>
     </Routes>
    </BrowserRouter>

   
    </div>
  );
}

export default App;