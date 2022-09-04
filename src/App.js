
import Weatherapp from './Weatherapp';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { BrowserRouter , Routes , Route } from "react-router-dom";




function App () {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Weatherapp/>}  />
      <Route path="/login" element={<Login/>}  />
      <Route path="/signup" element={<Signup/>}  />
      <Route path="/home" exact element={<Home/>}  />
      <Route path='/home/:City' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

