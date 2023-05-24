import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="py-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold"><span className="text-amber-500">B</span>log</h1>
      <div className="flex gap-x-4 items-center">
        <Link to="/login">
          <button>
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button 
            className="bg-amber-500 text-white px-4 py-1 rounded"
          >
            Signup
          </button>
        </Link>
      </div>
    </header>
  )
}
export default Header