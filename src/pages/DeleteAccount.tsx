export default function DeleteAccount() {
  return (
    <div className="pt-16 bg-neutral-950 min-h-screen text-neutral-300">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2">Account Deletion</h1>
        <p className="text-neutral-500 text-sm">Information regarding Everything App accounts</p>

        <div className="mt-8 markdown-content max-w-none">
          <p>
            The Everything App is exclusively designed for use by college members (students, professors, and proctors) and is directly linked to official college email accounts.
          </p>
          <p>
            To maintain institutional records, security, and the integrity of essential features like SOS and mess management, <strong>direct account deletion by users is not possible</strong>.
          </p>

          <h2>How to Request Account Updates or Deletion</h2>
          <p>
            If you need your account information updated or believe your account should be deleted (e.g., you are no longer associated with the institute), you cannot do so directly through the app or website. Instead, you must follow the official institutional process:
          </p>
          <ul>
            <li>
              Contact the <strong>DUGC (Departmental Undergraduate Committee)</strong> of your department or the relevant college administration.
            </li>
            <li>
              Requests for account updates or deletion will <strong>only be entertained and processed if they come directly from the college administration</strong>.
            </li>
          </ul>

          <div className="mt-8 p-5 bg-neutral-900/50 rounded-xl border border-neutral-850">
            <h3 className="text-sm font-bold text-white mb-2">Technical Support</h3>
            <p className="text-sm text-neutral-400 mb-2">
              For technical issues not related to account deletion, you can reach out to us:
            </p>
            <ul className="mt-2 text-sm text-neutral-400 space-y-1">
              <li><strong>Email:</strong> contact@copsiitbhu.co.in</li>
              <li><strong>Organization:</strong> Club Of ProgrammerS (COPS), IIT (BHU) Varanasi</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
