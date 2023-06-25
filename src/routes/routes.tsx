import { BrowserRouter, Routes, Route}  from 'react-router-dom';

import App from '../App';
import Home from '../screens/home';


function Routesapp(){
    return(
<BrowserRouter>

 <Routes>
   <Route  path="" element={<Home/>}/>
   <Route  path="/home" element={<Home/>}/>
    
   
 </Routes>

</BrowserRouter>
    );
}
export default Routesapp;