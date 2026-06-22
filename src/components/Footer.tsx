import { Link } from 'react-router-dom'
import VTLogo from './VTLogo'

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 group mb-3">
              <VTLogo className="w-6 h-6 text-white" />
              <span className="text-base font-bold text-white tracking-wide">
                Everything App
              </span>
            </div>
            <p className="mt-2 text-sm text-neutral-400 leading-relaxed">
              The official student app for IIT (BHU) Varanasi, built by{' '}
              <a
                href="https://copsiitbhu.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cops-400 hover:text-cops-300 hover:underline transition-colors"
              >
                Club Of ProgrammerS (COPS)
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Links
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-neutral-400 hover:text-cops-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="text-sm text-neutral-400 hover:text-cops-400 transition-colors">
                  Account Deletion
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              COPS IIT BHU
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://copsiitbhu.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-cops-400 transition-colors"
                >
                  Website
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/COPS-IITBHU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-400 hover:text-cops-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-neutral-900">
          <p className="text-xs text-neutral-500 text-center">
            &copy; {new Date().getFullYear()} COPS IIT BHU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
