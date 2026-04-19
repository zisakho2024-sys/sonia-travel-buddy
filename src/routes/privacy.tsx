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
      <p>At <strong>Sonia Buddy</strong>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application and website.</p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Location Data:</strong> We only access your device's location to enable bus stop tracking and "Smart Geofence Alerts." We do <strong>not</strong> use background GPS access and we do <strong>not</strong> perform real-time bus tracking.</li>
        <li><strong>Personal Information:</strong> We only collect your <strong>Gmail (email address)</strong> when you register or book a tour through our partners. We do <strong>not</strong> collect your mobile number.</li>
        <li><strong>No Device Information:</strong> We do not collect technical device data such as model, OS version, or unique identifiers.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To trigger <strong>Sound and Vibration alerts</strong> as you reach your destination.</li>
        <li>To provide accurate bus route and timing information based on your current position.</li>
        <li>To connect you with verified local travel agencies for tour bookings.</li>
        <li>To improve our Sonia Buddy database and regional transportation tracking in West Bengal.</li>
      </ul>

      <h2>3. Location Usage (Foreground Only)</h2>
      <p>Sonia Buddy uses your location <strong>only while the app is open</strong> to detect proximity to your selected bus stop. We do <strong>not</strong> track your location in the background. You can enable or disable location permission at any time through your device settings.</p>

      <h2>4. Data Sharing & Third Parties</h2>
      <p>We do not sell your personal data. We only share information with:</p>
      <ul>
        <li><strong>Verified Tour Partners:</strong> Only when you explicitly request a booking or inquiry.</li>
        <li><strong>Service Providers:</strong> Like Google Maps or Cloudflare for technical operations.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>We use industry-standard encryption (including Supabase and Cloudflare security protocols) to protect your data from unauthorized access or leaks.</p>

      <h2>6. Your Rights</h2>
      <p>You have the right to access, update, or delete your personal information at any time. You can also withdraw location permissions, although this will disable the smart alert features.</p>

      <h2>7. Changes to This Policy</h2>
      <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>

      <h2>8. Contact Us</h2>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:zisakhoofficial@gmail.com">zisakhoofficial@gmail.com</a></li>
        <li><strong>Location:</strong> West Bengal, India</li>
      </ul>
    </LegalLayout>
  );
}
