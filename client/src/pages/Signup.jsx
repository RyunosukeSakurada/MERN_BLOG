import { Link } from "react-router-dom"
import SignupImg from "../assets/signup.jpg"

const Signup = () => {
  return (
    <div className="md:flex w-full h-screen items-start">
      <div className="md:w-1/2 h-full flex flex-col p-20 justify-between">
        <h2 className="text-xl font-semibold">BLOG</h2>

        <div className="w-full flex flex-col max-w-[400px] mx-auto">
          <div className="w-full flex flex-col">
            <h3 className="text-2xl font-semibold mb-5">Create your account</h3>
            <p className="text-sm mb-2">Let's get started for free !</p>
          </div>

          <div className="w-full flex flex-col">
            <input 
              type="email"
              placeholder="email@example.com"
              className="w-full bg-transparent border-b border-black outline-none focus:outline-none py-2 my-4"
            />
            <input 
              type="password"
              placeholder="enter your password"
              className="w-full bg-transparent border-b border-black outline-none focus:outline-none py-2 my-4"
            />
          </div>


          <div className="w-full flex items-center">
            <button className="w-full font-semibold bg-white hover:bg-amber-300 border-2 border-amber-500 rounded-md p-2 text-center mt-8">
              Sign up
            </button>
          </div>
        </div>

        <Link to="/login">
          <div className="w-full flex items-center justify-center">
            <p className="text-sm text-zinc-500">Already have an account ? <span className="font-semibold underline underline-offset-2 cursor-pointer">Log in from here</span></p>
          </div>
        </Link>

      </div>

      <div className="hidden md:w-1/2 h-full md:flex md:flex-col">
          <img 
            src={SignupImg} 
            alt="" 
            className="w-full h-full object-cover"
          />
      </div>

  </div>
  )
}
export default Signup