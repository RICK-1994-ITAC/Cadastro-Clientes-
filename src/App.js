import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Create from "./pages/Create";
import Read from "./pages/Read"
import Update from "./pages/Update";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/create" element= {<Create />}/>
      <Route path="/read/:id" element= {<Read />}/>
      <Route path="/update/:id" element= {<Update />}/>
    </Routes>
   </BrowserRouter> 
  )
}

export default App;
