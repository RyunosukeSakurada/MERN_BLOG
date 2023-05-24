import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import WritePost from "./pages/WritePost"
import {Route,Routes} from "react-router-dom"
import { UserContextProvider } from "./context/UserContext"
import Layout from "./pages/Layout"

function App() {

  return (
    <div className="bg-neutral-100 min-h-screen ">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={ <Home />} />
            <Route path="/write" element={<WritePost/>} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </UserContextProvider>
    </div>
  )
}

export default App
