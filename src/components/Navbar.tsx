import { Link, useLocation } from 'react-router-dom'
import VTLogo from './VTLogo'

export default function Navbar() {
  const { pathname } = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/70 backdrop-blur-md border-b border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <VTLogo className="w-8 h-8 text-white transition-transform group-hover:scale-105" />
          <div className="flex flex-col">
            <span className="text-sm font-bold text-white tracking-wide leading-none">
              Everything App
            </span>
            <span className="text-[10px] text-neutral-400 font-semibold tracking-wider mt-0.5 uppercase">
              IIT (BHU)
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link
            to="/"
            className={`font-medium transition-colors ${
              pathname === '/' ? 'text-cops-400' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Home
          </Link>
          <Link
            to="/privacy"
            className={`font-medium transition-colors ${
              pathname === '/privacy' ? 'text-cops-400' : 'text-neutral-400 hover:text-white'
            }`}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </nav>
  )
}
