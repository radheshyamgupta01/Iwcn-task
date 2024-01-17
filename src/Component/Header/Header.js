import React from 'react';

function Header() {
  return (
    // component
    <nav id="header" className="w-full z-30  py-1 bg-white shadow-lg border-b border-blue-400 ">
      <div className="w-full flex items-center justify-between mt-0 px-6 py-2">
       
       

        <div className="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
              <li>
              <svg
      className="fill-current text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
              </li>
              <li>
                <a className="inline-block no-underline hover:text-black font-medium text-lg py-2 px-4 lg:-ml-2" href="#">
                  Note
                </a>
              </li>
              
            
             
            </ul>
          </nav>
        </div>

        
      </div>
    </nav>
  );
}

export default Header;
