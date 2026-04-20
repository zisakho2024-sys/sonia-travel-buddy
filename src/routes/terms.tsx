import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Sonia Buddy" },
      { name: "description", content: "Terms governing your use of the Sonia Buddy app and website." },
      { property: "og:title", content: "Terms & Conditions — Sonia Buddy" },
      { property: "og:description", content: "User responsibilities, accuracy, and disclaimers." },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <LegalLayout title="Terms and Conditions" subtitle="Effective Date: April 19, 2026">
      <p>These Terms and Conditions ("Terms") govern your access to and use of the <strong>Sonia Buddy</strong> mobile application and related website (collectively, the "Service"). By downloading, installing, or using Sonia Buddy, you agree to be legally bound by these Terms. If you do not agree, you must discontinue use of the Service immediately.</p>

      <h2>1. Eligibility</h2>
      <ul>
        <li>You must be at least <strong>18 years of age</strong> to register for or use Sonia Buddy.</li>
        <li>By using the Service, you represent and warrant that you meet this age requirement and have the legal capacity to enter into a binding agreement.</li>
      </ul>

      <h2>2. User Accounts</h2>
      <ul>
        <li>You agree to provide <strong>accurate, current, and complete information</strong>, including your <strong>Name</strong>, <strong>Email Address</strong>, and <strong>Address</strong> (entered manually), for account creation and bookings.</li>
        <li>You are solely responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
        <li>You agree to notify Sonia Buddy immediately of any unauthorized access to or use of your account.</li>
      </ul>

      <h2>3. Service Accuracy and Limitation of Liability</h2>
      <ul>
        <li>Bus timings, routes, and location information provided in West Bengal are <strong>estimates</strong> compiled from publicly available and operator-provided data.</li>
        <li>Sonia Buddy does <strong>not</strong> guarantee the accuracy, completeness, or real-time precision of any schedule, and is <strong>not liable</strong> for delays, missed buses, lost time, or any consequential loss arising from traffic, operator changes, or GPS inaccuracies.</li>
        <li>Users are strongly advised to arrive at the bus stop <strong>10–15 minutes before</strong> the scheduled time.</li>
      </ul>

      <h2>4. Third-Party Services and Tour Bookings</h2>
      <ul>
        <li>Sonia Buddy operates as a <strong>platform</strong> that connects users with independent local travel agencies and tour operators.</li>
        <li>We are <strong>not responsible</strong> for the quality, safety, legality, or delivery of services provided by any third-party tour operator.</li>
        <li>All financial transactions, refunds, cancellations, and disputes relating to tours must be resolved directly between the user and the respective agency.</li>
      </ul>

      <h2>5. Prohibited Use</h2>
      <p>When using Sonia Buddy, you agree <strong>not</strong> to:</p>
      <ul>
        <li>Use the Service for any unlawful, fraudulent, or harmful purpose.</li>
        <li>Attempt to hack, reverse engineer, decompile, disassemble, or otherwise tamper with the app, its database, or its underlying infrastructure.</li>
        <li>Submit false, misleading, or malicious route, schedule, or booking information.</li>
        <li>Use automated means (bots, scrapers) to access or copy any part of the Service without written permission.</li>
      </ul>

      <h2>6. Intellectual Property</h2>
      <ul>
        <li>All content within the Service — including the <strong>Sonia Buddy</strong> name, logo, route database, UI design, graphics, and text — is the exclusive property of Sonia Buddy and is protected by applicable intellectual property laws.</li>
        <li>No part of the Service may be reproduced, distributed, or used commercially without prior written consent.</li>
      </ul>

      <h2>7. Data Privacy</h2>
      <p>Your use of the Service is also governed by our <a href="/privacy">Privacy Policy</a>, which describes how we collect, use, and protect your personal information. By using Sonia Buddy, you consent to the practices described in that policy.</p>

      <h2>8. Modifications to the Terms</h2>
      <p>We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised effective date. Your continued use of the Service after any such changes constitutes acceptance of the revised Terms.</p>

      <h2>9. Governing Law and Jurisdiction</h2>
      <p>These Terms shall be governed by and construed in accordance with the laws of <strong>India</strong>. Any disputes arising out of or relating to these Terms or the Service shall be subject to the exclusive jurisdiction of the competent courts of <strong>West Bengal, India</strong>.</p>

      <h2>10. Contact Information</h2>
      <p>For any questions, concerns, or support requests regarding these Terms, please contact us at:</p>
      <ul>
        <li><strong>Support Email:</strong> <a href="mailto:zisakhoofficial@gmail.com">zisakhoofficial@gmail.com</a></li>
      </ul>
    </LegalLayout>
  );
}
