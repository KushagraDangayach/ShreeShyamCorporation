const Header = () => {
  return (
    <header className="bg-[#E7F3EF] py-2 px-4 border-b border-amber-100">
      <div className="container mx-auto">
        <div className="text-black">
          <div className="flex flex-wrap md:flex-nowrap items-center">
            <div className="flex items-center whitespace-nowrap">
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs md:text-sm truncate">
                support@shrishyamcorporation.in
              </span>
            </div>

            <div className="flex items-center whitespace-nowrap ml-4">
              <svg 
                className="w-4 h-4 mr-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
              <span className="text-xs md:text-sm">+91 91663 31604</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
