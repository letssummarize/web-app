import Container from "../container/page";

const Navbar = () => {
  return (
    <nav className=" text-white p-6">
      <Container classNames=" mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center ">
          <img src="/" alt="" className="h-6" />
          <span className="text-lg ">logo</span>
        </div>

        {/* Navbar Items */}
        <ul className="hidden md:flex space-x-6 text-sm justify-1">
          <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M19.615 7.018a2.543 2.543 0 0 0-1.791-1.797C16.065 5 12 5 12 5s-4.065 0-5.824.221a2.543 2.543 0 0 0-1.791 1.797C4 8.793 4 12 4 12s0 3.207.385 4.982a2.543 2.543 0 0 0 1.791 1.797C7.935 19 12 19 12 19s4.065 0 5.824-.221a2.543 2.543 0 0 0 1.791-1.797C20 15.207 20 12 20 12s0-3.207-.385-4.982zM10 15V9l5 3-5 3z" />
            </svg>
            <span>Summarize Videos</span>
          </li>

          <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M2 3h20v18H2V3zm18 2H4v14h16V5zM6 17h12v2H6v-2zm0-4h12v2H6v-2zm0-4h12v2H6V9z"></path>
            </svg>
            <span>Summarize Text</span>
          </li>

          <li className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M6 2h12v2H6V2zm13 4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-7 10H8v-2h4v2zm4-4H8V8h8v4z"></path>
            </svg>
            <span>Summarize PDF</span>
          </li>
        </ul>

        {/* API Docs & GitHub */}
        <div className="flex space-x-4 text-sm">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M3 3h18v18H3V3zm5 2v2H5v14h14V7h-3V5h-8zM9 7h6v2H9V7zm-1 4h8v6h-8v-6zm2 2v2h4v-2h-4z"></path>
            </svg>
            <span>API Documentation</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48 0-.24-.01-1.02-.02-1.86-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.61.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.67-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.02A9.57 9.57 0 0 1 12 6.5a9.6 9.6 0 0 1 2.51.34c1.91-1.29 2.75-1.02 2.75-1.02.55 1.41.2 2.45.1 2.71.64.69 1.03 1.58 1.03 2.67 0 3.84-2.34 4.69-4.57 4.94.36.31.69.91.69 1.84 0 1.33-.01 2.4-.01 2.73 0 .27.18.58.69.48A10 10 0 0 0 12 2z"></path>
            </svg>
            <span>GitHub</span>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
