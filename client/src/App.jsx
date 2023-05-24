import Home from "./pages/Home"
import {Route,Routes} from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { UserContextProvider } from "./context/UserContext"

function App() {

  return (
    <div className="bg-neutral-100 min-h-screen ">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
