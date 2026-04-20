import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Sonia Buddy" },
      { name: "description", content: "How Sonia Buddy collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy — Sonia Buddy" },
      { property: "og:description", content: "How we collect, use, and safeguard your data." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" subtitle="Effective Date: April 19, 2026">
      <p>At <strong>Sonia Buddy</strong>, we are committed to protecting your privacy. This Privacy Policy explains what information we collect, how we use it, and the choices you have. Sonia Buddy is a travel assistant for West Bengal, offering bus tracking and tour booking services.</p>

      <h2>1. Data We Collect</h2>
      <p>To provide our services and manage your account, we collect the following information that you provide manually during registration or booking:</p>
      <ul>
        <li><strong>Name</strong> — for account identification and tour bookings.</li>
        <li><strong>Email Address</strong> — for login, booking confirmations, and essential communication.</li>
        <li><strong>Address</strong> — entered manually by you, used for booking and account management purposes.</li>
      </ul>
      <p>We do <strong>not</strong> collect your phone number or other contact details beyond what is listed above.</p>

      <h2>2. Location Data</h2>
      <ul>
        <li>We collect <strong>Precise Location</strong> data <strong>only while the app is open</strong> (foreground use).</li>
        <li>Location is used exclusively for <strong>bus stop tracking</strong> and <strong>Smart Geofence Alerts</strong> (sound and vibration when you approach your destination).</li>
        <li>We do <strong>not</strong> access your location in the background, and we do <strong>not</strong> perform real-time bus tracking.</li>
        <li>You may revoke location permission at any time from your device settings; some proximity features will stop working if you do.</li>
      </ul>

      <h2>3. Performance Data</h2>
      <p>To keep the app stable and reliable, we collect limited technical information:</p>
      <ul>
        <li><strong>Crash Logs</strong> — automatically recorded when the app encounters an error.</li>
        <li><strong>Diagnostics</strong> — anonymous performance data used to identify and fix bugs.</li>
      </ul>
      <p>This information is used solely for debugging and improving app quality.</p>

      <h2>4. How We Use Your Information</h2>
      <ul>
        <li>To create and manage your user account.</li>
        <li>To provide bus route information and trigger geofence-based sound/vibration alerts.</li>
        <li>To process tour bookings through verified travel partners.</li>
        <li>To diagnose technical issues and improve the Sonia Buddy service.</li>
      </ul>

      <h2>5. Child Safety</h2>
      <p>Sonia Buddy is intended strictly for users <strong>aged 18 and over</strong>. We do <strong>not</strong> knowingly collect personal data from minors. If we become aware that a minor has provided us with personal information, we will delete it promptly. Parents or guardians who believe their child has used the app may contact us at the email below for immediate removal.</p>

      <h2>6. Data Sharing &amp; Third Parties</h2>
      <p>We <strong>do not sell</strong> your personal data to anyone. Information is shared only in the following limited circumstances:</p>
      <ul>
        <li><strong>Verified Tour Partners:</strong> When you request a tour booking, relevant details (such as your name and email) are shared with the respective partner to fulfill your request.</li>
        <li><strong>Service Providers:</strong> Trusted technical providers (e.g., hosting and maps) that support the operation of the app.</li>
      </ul>

      <h2>7. Data Security</h2>
      <p>We implement industry-standard security measures, including encryption in transit, to protect your information against unauthorized access, alteration, or disclosure.</p>

      <h2>8. Data Deletion &amp; Your Rights</h2>
      <p>You have the right to access, correct, or delete your personal information at any time. To request <strong>account and data deletion</strong>, please email us at <a href="mailto:zisakhoofficial@gmail.com">zisakhoofficial@gmail.com</a> from your registered email address with the subject line <em>"Account Deletion Request"</em>. We will process verified requests and permanently delete your account and associated data within a reasonable period, subject to any legal retention obligations.</p>

      <h2>9. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of the app after changes constitutes acceptance of the revised policy.</p>

      <h2>10. Contact Us</h2>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:zisakhoofficial@gmail.com">zisakhoofficial@gmail.com</a></li>
        <li><strong>Location:</strong> West Bengal, India</li>
      </ul>
    </LegalLayout>
  );
}
