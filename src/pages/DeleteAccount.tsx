export default function DeleteAccount() {
  return (
    <div className="pt-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Account Deletion</h1>
        <p className="text-gray-500 text-sm">How to delete your Everything App account and data</p>

        <div className="mt-8 prose prose-gray max-w-none">
          <p>
            We respect your right to control your personal data. If you wish to delete your
            Everything App account and all associated data, you have two options:
          </p>

          <h2>Option 1: Delete via the App (Recommended)</h2>
          <ol>
            <li>Open the Everything App on your device.</li>
            <li>Go to <strong>Settings</strong> from the navigation menu.</li>
            <li>Tap on <strong>Account</strong>.</li>
            <li>Select <strong>Delete Account</strong>.</li>
            <li>Confirm your decision when prompted.</li>
          </ol>
          <p>
            Your account and associated data will be permanently deleted within 24 hours.
          </p>

          <h2>Option 2: Request via Email</h2>
          <p>
            Send an email to{' '}
            <a href="mailto:cops@iitbhu.ac.in" className="text-cops-600 hover:underline">
              cops@iitbhu.ac.in
            </a>{' '}
            from the email address associated with your Everything App account with the subject
            line <strong>"Account Deletion Request - Everything App"</strong>.
          </p>
          <p>
            Please include your full name and institute roll number (if applicable) so we can
            verify your identity. We will process your request and send a confirmation email
            within 7 business days.
          </p>

          <h2>What Gets Deleted</h2>
          <p>When you delete your account, the following data is permanently removed:</p>
          <ul>
            <li>Your profile information (name, email, photo)</li>
            <li>Authentication records</li>
            <li>Mess menu preferences (if any)</li>
            <li>SOS alert history (after applicable retention period for safety auditing)</li>
            <li>FCM device tokens</li>
          </ul>

          <h2>What May Be Retained</h2>
          <p>
            In certain circumstances, we may need to retain limited data even after account
            deletion:
          </p>
          <ul>
            <li>
              <strong>SOS alert records</strong> may be retained for up to 12 months for
              safety, audit, and legal compliance purposes. These records contain only basic
              information (timestamp, anonymized location) and are not linked to your deleted
              account.
            </li>
            <li>
              <strong>Aggregated analytics data</strong> that does not identify you personally
              may be retained for service improvement.
            </li>
          </ul>
          <p>
            Data retention for legal or safety purposes will be clearly communicated to you at
            the time of your deletion request.
          </p>

          <h2>Important Notes</h2>
          <ul>
            <li>
              <strong>Account deletion is permanent.</strong> Once your account is deleted, it
              cannot be recovered. You will need to create a new account to use the App again.
            </li>
            <li>
              Temporary deactivation, disabling, or freezing your account does not qualify as
              account deletion under Google Play policy.
            </li>
            <li>
              If you need to retain certain data (such as academic records linked to your
              account), please contact us before submitting a deletion request.
            </li>
          </ul>

          <h2>Need Help?</h2>
          <p>
            If you encounter any issues with the account deletion process, please contact us at{' '}
            <a href="mailto:cops@iitbhu.ac.in" className="text-cops-600 hover:underline">
              cops@iitbhu.ac.in
            </a>{' '}
            and we will assist you promptly.
          </p>

          <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-900">Contact Information</h3>
            <ul className="mt-2 text-sm text-gray-600">
              <li><strong>Email:</strong> cops@iitbhu.ac.in</li>
              <li><strong>Organization:</strong> COPS (Coding and Open Source Society), IIT (BHU) Varanasi</li>
              <li><strong>Response Time:</strong> Within 7 business days</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
