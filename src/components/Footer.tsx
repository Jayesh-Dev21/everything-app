import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-lg font-bold bg-gradient-to-r from-cops-500 to-cops-700 bg-clip-text text-transparent">
              Everything
            </span>
            <p className="mt-2 text-sm text-gray-500">
              The official student app for IIT (BHU) Varanasi, built by{' '}
              <a
                href="https://copsiitbhu.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cops-600 hover:underline"
              >
                Club Of ProgrammerS (COPS)
              </a>
              .
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Links
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-gray-500 hover:text-cops-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/delete-account" className="text-sm text-gray-500 hover:text-cops-600 transition-colors">
                  Account Deletion
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              COPS IIT BHU
            </h3>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href="https://copsiitbhu.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-cops-600 transition-colors"
                >
                  Website
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/COPS-IITBHU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-cops-600 transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} COPS IIT BHU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
