const Header = () =>{
    return (
        <div className="flex justify-between h-20 bg-yellow-500 text-white items-center px-6 shadow-black shadow-md" >
          <div> 
            <a href="/" className="text-4xl cursor-pointer"> QuizShow</a>
          </div>
          <div className="flex text-2xl">
            <a href="/login" className="p-4 hover:bg-white hover:text-black rounded-3xl">Login</a>
            <a href="/signup"  className="p-4 hover:bg-white hover:text-black rounded-3xl">Sign Up</a>
          </div>
         
        </div>
 
    )
}
export default Header;
