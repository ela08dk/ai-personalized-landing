import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-craftera-dark mb-8">Privacy Policy for Newmode</h1>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500">Last Updated: July 10, 2025</p>
            
            <p>Your privacy is important to us. This Privacy Policy ("Policy") applies to services provided by Newmode ("we", "us", or "Newmode") and our website (the "Site"), product pages, mobile or web applications, or other digital products that link to or reference this Policy (collectively, the "Services") and explains what information we collect from users of our Services (a "user", "you", or "your"), including information that may be used to personally identify you ("Personal Information") and how we use it. We encourage you to read the details below. This Policy applies to any visitor to or user of our Services. Any capitalized terms used herein but not defined shall have the meaning set forth in our Terms of Service, available at https://newmode.ai/terms.</p>

            <p>We reserve the right to change this Policy at any time. We will notify you of any changes to this Policy by posting a new Policy to this page and/or by sending notice to the primary email address specified in your account. You are responsible for ensuring we have an up-to-date active and deliverable email address for you, and for periodically reviewing this Policy to check for any changes. Changes to this Policy are effective when they are posted on this page. You acknowledge that your continued use of our Services after we publish or send a notice about our changes to this Policy means that the collection, use and sharing of your Personal Information is subject to the updated Policy.</p>

            <h2 className="text-2xl font-semibold text-craftera-dark mt-8 mb-4">Scope and Applicability</h2>
            <p>The Policy applies to your information when you visit our website or otherwise use the Services. Please note that this Policy does not apply to the extent that we process Personal Information in the role of a processor (or a comparable role such as a "service provider" in certain jurisdictions) on behalf of our Customers, including where we collect Customer Data on behalf of our Customers, or where our Customers otherwise collect, use, share or process Personal Information via our Services. Each of our Customers, not Newmode, controls what information about you is collected by the Services on behalf of such Customer. For detailed privacy information applicable to situations where a Customer who uses the Services is the controller, please reach out to the respective customer directly. We are not responsible for the privacy or data security practices of our Customers, which may differ from those set forth in this Privacy Policy. If not stated otherwise either in this Privacy Policy or in a separate disclosure, we process such Personal Information in the role of a processor or service provider on behalf of a Customer (and/or its affiliates), who is the responsible controller of the applicable Personal Information.</p>

            <p>As Newmode is based in England, we comply with the UK General Data Protection Regulation (UK GDPR) and other applicable UK data protection laws. Where we act as a data processor under UK GDPR, we process personal data only in accordance with the instructions of the data controller Customers.</p>

            <p>This Privacy Policy also does not apply to any third-party applications or services that are used in connection with our Services, or any other products, services or accounts provided by other entities under their own terms of service and privacy policy (collectively, "Third-Party Services"). For example, a Customer may connect, directly or through another application, third party applications and platforms, and other products and services to Newmode. These Third-Party Services are not part of our Services and are provided by independent third parties under their policies and terms. Lastly, the Site or Services may contain links to other websites. We have no control over these websites and they are subject to their own terms of use and privacy policies.</p>

            <h2 className="text-2xl font-semibold text-craftera-dark mt-8 mb-4">What Information Do We Collect?</h2>
            
            <h3 className="text-xl font-semibold text-craftera-dark mt-6 mb-3">Information You Provide to Us</h3>
            <p><strong>Account Information.</strong> To create an account for the Services or to enable certain features, we may require that you provide us with information for your account such as name, email, profile picture, password, and authentication credentials.</p>
            <p><strong>Payment Information.</strong> If you sign up for a paid subscription, we (or our payment processors) may need your billing details such as credit card information, banking information, and billing address. Your payment information, such as your payment method (valid credit card number, type, expiration date or other financial information), is collected and stored by our third party payment processing company (the "Payment Processor") and use and storage of that information is governed by the Payment Processors applicable privacy policy. As of the Effective Date of this Privacy Policy listed below, Stripe is the Payment Processor used within the Services and its privacy policy is available at https://stripe.com/gb/privacy or such other URL designated by Stripe. In order to facilitate your order transactions, we collect and store your credit card type, the last four digits of your credit card number, and expiration date, but no other financial information.</p>
            <p><strong>Recordings and Other Customer Data.</strong> In using our Services, our customers may submit or upload, or instruct Newmode to collect, audio recordings, transcriptions and/or screenshots, seek customer support, or provide other data relevant to our B2B SaaS AI software services.</p>
            <p><strong>Communications.</strong> We may collect information when you contact us, such as at hello@newmode.ai, including the content of your message, attachments, and metadata like time and date.</p>
            <p><strong>Other Information.</strong> You may provide other information directly to us, such as when you participate in surveys, webinars, or events hosted by us.</p>

            <h3 className="text-xl font-semibold text-craftera-dark mt-6 mb-3">Information We Collect Automatically</h3>
            <p>When you visit our Site or use our Services, we may automatically collect certain information about your device, including:</p>
            <p><strong>Device and Browser Information:</strong> IP address, device type, operating system, unique device identifiers, browser type and version, and settings.</p>
            <p><strong>Usage Information:</strong> Pages viewed, time spent, clicks, scrolls, and navigation paths.</p>
            <p><strong>Cookies and Similar Technologies:</strong> We use cookies, pixel tags, and similar technologies to collect data on usage and preferences. You can manage cookies through your browser settings.</p>
            <p>We may also collect location data if you enable it, but for analytics purposes.</p>

            <h2 className="text-2xl font-semibold text-craftera-dark mt-8 mb-4">How Do We Use Your Information?</h2>
            <p>We use the information collected for the following purposes:</p>
            <ul className="space-y-2">
              <li>To provide and maintain the Services, including processing accounts, subscriptions, and customer data as instructed.</li>
              <li>To process payments and manage billing.</li>
              <li>To communicate with you, including support, updates, and marketing (with consent where required under UK GDPR).</li>
              <li>To improve our Services, through analytics and research.</li>
              <li>To comply with legal obligations, such as under UK data protection laws.</li>
              <li>To detect and prevent fraud, abuse, or security issues.</li>
            </ul>
            <p>We process personal information where we have a lawful basis under UK GDPR, such as contract performance, legitimate interests, consent, or legal obligations.</p>

            <h2 className="text-2xl font-semibold text-craftera-dark mt-8 mb-4">Sharing of Information</h2>
            <p>We may share your Personal Information with:</p>
            <ul className="space-y-2">
              <li>Service providers, such as hosting, analytics, payment processors (e.g., Stripe), who are bound by data protection agreements.</li>
              <li>Affiliates and subsidiaries of Newmode.</li>
              <li>In the event of a merger, acquisition, or sale of assets.</li>
              <li>To comply with legal requirements, enforce our terms, or protect rights.</li>
              <li>With your consent or at your direction.</li>
            </ul>
            <p>We do not sell personal information.</p>
            <p>For Customer Data, as processor, we share only as instructed by the Customer (controller).</p>

            <h2 className="text-2xl font-semibold text-craftera-dark mt-8 mb-4">International Transfers</h2>
            <p>As a UK-based company, if we transfer personal data outside the UK, we ensure adequate protections, such as UK International Data Transfer Agreements or adequacy decisions.</p>

            <h2 className="text-2xl font-semibold text-craftera-dark mt-8 mb-4">Data Retention</h2>
            <p>We retain Personal Information as long as necessary for the purposes above, or as required by law. For example, account data is retained while active, and then for a period for legal or backup purposes.</p>

            <h2 className="text-2xl font-semibold text-craftera-dark mt-8 mb-4">Your Rights</h2>
            <p>Under UK GDPR, you may have rights to access, rectify, erase, restrict, port, or object to processing of your personal data. To exercise these, contact us at hello@newmode.ai.</p>
            <p>You can also complain to the UK Information Commissioner's Office (ICO).</p>

            <h2 className="text-2xl font-semibold text-craftera-dark mt-8 mb-4">Security</h2>
            <p>We implement reasonable security measures to protect your information, but no system is completely secure.</p>

            <h2 className="text-2xl font-semibold text-craftera-dark mt-8 mb-4">Children's Privacy</h2>
            <p>Our Services are not directed at children under 16, and we do not knowingly collect their data.</p>

            <h2 className="text-2xl font-semibold text-craftera-dark mt-8 mb-4">Contact Us</h2>
            <p>For questions, contact hello@newmode.ai.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;