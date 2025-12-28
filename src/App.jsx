import { useState } from "react"
import LoginPage from "./Components/LoginPage"
import { BrowserRouter, Route,Routes } from "react-router-dom"
import AdminDashboard from "./Components/AdminDashboard"



function App(){
  const [isAuth,setIsAuth]=useState(false)
return(
  <BrowserRouter>
  <Routes>
<Route path="./login" element={<Login setIsAuth={setIsAuth}/>}/>
<Route path="./admin" element={<ProtectedRoute isAuth={isAuth}>
  <AdminDashboard/>
</ProtectedRoute>}/>
<Route path="*" element={<Navigate to="./login"/>}/>

  </Routes>
  
  </BrowserRouter>
)
}
export default App