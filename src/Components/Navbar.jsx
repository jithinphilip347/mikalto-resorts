


const Navbar = () => {

    return (
      <>
        <div className="bg-transparent absolute top-0 w-full z-20">
          <div className="flex justify-between items-center py-4 px-6">
            <div className="">
              <ul className="flex items-center gap-7 font-sans text-base text-white">
                <li>Home</li>
                <li>Our Rooms</li>
                <li>Dining</li>
              </ul>
            </div>
            <div className="p-5">
              <img
                src="https://mikalto.gavencreative.com/wp-content/uploads/2023/07/logo.svg"
                alt=""
              />
            </div>
            <div>
              <ul className="flex items-center gap-7 font-sans text-base text-white">
                <li>Blog</li>
                <li>Contact Us</li>
                <li>About</li>
                <li className="flex">Log In</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Display text over hero section */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white top-[455px] font-branch z-20">
          <div className="text-6xl leading-3xl text-shadow-lg">Word Best Resort</div>
          <div className="text-white text-8xl leading-7xl text-shadow-lg">In Wild Nature</div>
        </div>
      </>
    );
  };
  
  export default Navbar;
  