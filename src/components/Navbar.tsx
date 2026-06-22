import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold bg-gradient-to-r from-cops-500 to-cops-700 bg-clip-text text-transparent">
            Everything
          </span>
          <span className="text-xs text-gray-400 font-medium">IIT BHU</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            className={`font-medium transition-colors ${
              pathname === '/' ? 'text-cops-600' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Home
          </Link>
          <Link
            to="/privacy"
            className={`font-medium transition-colors ${
              pathname === '/privacy' ? 'text-cops-600' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </nav>
  )
}
