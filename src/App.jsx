import { BrowserRouter } from "react-router-dom"
import './App.scss'
import Home from "./Pages/Home"
import { UserProvider } from "./Context/USersContext"

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <UserProvider>
          <Home />
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App