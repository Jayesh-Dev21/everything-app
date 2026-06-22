import { Link } from 'react-router-dom'

export default function Privacy() {
  return (
    <div className="pt-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm">Last updated: June 22, 2026</p>

        <div className="mt-8 prose prose-gray max-w-none">
          <p>
            This Privacy Policy describes how COPS IIT BHU ("we," "us," or "our") collects, uses,
            and shares your personal information when you use the Everything App (the "App"). By
            using the App, you agree to the collection and use of information in accordance with
            this policy.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We collect the following types of information to provide and improve our services:</p>
          <ul>
            <li>
              <strong>Account Information:</strong> When you sign in using Google Sign-In, we
              collect your name, email address, and profile photo. This is essential for student
              identification and authentication.
            </li>
            <li>
              <strong>Camera Data:</strong> With your permission, we access your device's camera
              for QR code scanning. This is used solely for student identity verification. No
              images are stored or transmitted unless specifically required for a verification
              transaction.
            </li>
            <li>
              <strong>Location Data:</strong> With your permission, we collect precise (GPS) and
              approximate (network) location data. This is used exclusively for the SOS feature
              to share your location with proctors and security personnel during emergencies.
              Background location access is required so that SOS alerts can transmit your location
              even when the app is not actively in use.
            </li>
            <li>
              <strong>Biometric Data:</strong> With your permission, we use device biometric
              authentication (fingerprint, face recognition) to secure app access. Biometric data
              is processed entirely on your device and is never stored on our servers.
            </li>
            <li>
              <strong>Device Information:</strong> We collect device tokens via Firebase Cloud
              Messaging (FCM) to send push notifications. We may also collect device model, OS
              version, and unique device identifiers for analytics and fraud prevention.
            </li>
            <li>
              <strong>Usage Data:</strong> We collect information about how you interact with the
              App, including features used, time spent, and crash reports, to improve the App's
              performance and user experience.
            </li>
            <li>
              <strong>Call Phone Permission:</strong> With your permission, the SOS feature may
              initiate phone calls to designated proctors or emergency contacts. We do not record
              or store call logs.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>To authenticate your identity using QR codes and Google Sign-In</li>
            <li>To display and verify student identification details</li>
            <li>To provide mess menu information</li>
            <li>To send and process SOS alerts with your location to proctors and security</li>
            <li>To facilitate communication with proctors and institute authorities</li>
            <li>To send push notifications for announcements, alerts, and updates</li>
            <li>To improve, maintain, and troubleshoot the App</li>
            <li>To ensure the security and integrity of our services</li>
          </ul>

          <h2>3. Third-Party Services</h2>
          <p>We use the following third-party services that may collect and process your data:</p>
          <ul>
            <li>
              <strong>Firebase (Google):</strong> We use Firebase Core and Firebase Cloud
              Messaging for push notifications, analytics, and crash reporting. Firebase's
              privacy practices are governed by{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google's Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>Google Sign-In:</strong> We use Google Sign-In for authentication. Google's
              privacy practices are governed by{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                Google's Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong>PostgreSQL (Database):</strong> User account data and SOS alert records are
              stored securely in our PostgreSQL database hosted on our infrastructure.
            </li>
          </ul>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>We may share your information in the following circumstances:</p>
          <ul>
            <li>
              <strong>With Proctors and Security Personnel:</strong> When you trigger an SOS alert,
              your name, location, and alert details are shared with designated proctors and
              campus security for emergency response.
            </li>
            <li>
              <strong>With Service Providers:</strong> We may share data with third-party service
              providers who perform services on our behalf (e.g., cloud hosting, analytics). These
              providers are contractually obligated to protect your data.
            </li>
            <li>
              <strong>For Legal Reasons:</strong> We may disclose your information if required by
              law, legal process, or governmental request, or to protect our rights, property, or
              safety.
            </li>
            <li>
              <strong>With Your Consent:</strong> We may share your information for any other
              purpose with your explicit consent.
            </li>
          </ul>
          <p>
            <strong>We do not sell your personal information.</strong> We do not share your data
            with third parties for their own advertising or marketing purposes.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your
            personal information, including:
          </p>
          <ul>
            <li>Encryption of data in transit using TLS/HTTPS</li>
            <li>Secure storage of authentication tokens</li>
            <li>Regular security assessments and updates</li>
            <li>Access controls limiting data access to authorized personnel only</li>
          </ul>

          <h2>6. Data Retention and Deletion</h2>
          <p>
            We retain your personal information only as long as necessary to provide the App's
            services and fulfill the purposes described in this policy.
          </p>
          <ul>
            <li>
              <strong>Account Data:</strong> Retained until you request account deletion.
            </li>
            <li>
              <strong>SOS Alert Records:</strong> Retained for a period of 12 months for safety
              and audit purposes, after which they are anonymized or deleted.
            </li>
            <li>
              <strong>Analytics Data:</strong> Retained in aggregated, anonymized form for up to
              24 months.
            </li>
            <li>
              <strong>FCM Tokens:</strong> Updated regularly; inactive tokens are removed within
              90 days.
            </li>
          </ul>
          <p>
            When you request account deletion, we will delete your account information and
            associated data within 30 days, except where we are required to retain certain data
            for legal compliance, fraud prevention, or security purposes. In such cases, we will
            inform you of the retention period and rationale.
          </p>

          <h2>7. Account Deletion</h2>
          <p>
            You can request deletion of your account and associated data in the following ways:
          </p>
          <ul>
            <li>
              <strong>Within the App:</strong> Go to Settings &rarr; Account &rarr; Delete Account.
            </li>
            <li>
              <strong>Via our Website:</strong> Visit our{' '}
              <Link to="/delete-account" className="text-cops-600 hover:underline">
                Account Deletion page
              </Link>{' '}
              to submit a deletion request.
            </li>
          </ul>
          <p>
            Upon processing your deletion request, your account, profile data, and associated
            records will be permanently removed. Note that temporary deactivation or freezing
            of your account does not constitute deletion.
          </p>

          <h2>8. Your Rights</h2>
          <p>Depending on your jurisdiction, you may have the following rights:</p>
          <ul>
            <li>The right to access the personal data we hold about you</li>
            <li>The right to rectify inaccurate personal data</li>
            <li>The right to request deletion of your personal data</li>
            <li>The right to restrict or object to processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent at any time (without affecting the lawfulness of
              processing based on consent before its withdrawal)</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at the email address below.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            The App is intended for use by students and members of IIT (BHU) Varanasi. We do not
            knowingly collect personal information from children under 13 (or the applicable age
            of consent in your jurisdiction). If you believe we have collected data from a child,
            please contact us immediately.
          </p>

          <h2>10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new policy on this page and updating the "Last updated" date. For
            material changes, we will provide additional notice through the App or via email.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our
            data practices, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href="mailto:cops@iitbhu.ac.in" className="text-cops-600 hover:underline">
                cops@iitbhu.ac.in
              </a>
            </li>
            <li>
              <strong>Organization:</strong> COPS (Coding and Open Source Society), IIT (BHU)
              Varanasi
            </li>
            <li>
              <strong>Website:</strong>{' '}
              <a
                href="https://copsiitbhu.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cops-600 hover:underline"
              >
                https://copsiitbhu.co.in
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
