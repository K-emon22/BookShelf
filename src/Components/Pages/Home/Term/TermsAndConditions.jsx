import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-black">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-6 text-sm">Effective Date: June 11, 2025</p>

      <p className="mb-4">
        Welcome to{" "}
        <a href="https://emons-bookshelf.netlify.app" className="font-bold">
          Bookshelf
        </a>
        ! By accessing or using our website{" "}
        <a href="https://emons-bookshelf.netlify.app" className="font-bold">
          (https://emons-bookshelf.netlify.app)
        </a>
        , you agree to be bound by the following Terms and Conditions. Please
        read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using this website, you acknowledge that you have read, understood,
        and agree to be bound by these Terms and Conditions. If you do not
        agree, please do not use our website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Use of the Website</h2>
      <p className="mb-4">You agree to use this website for lawful purposes only and not to:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Violate any applicable laws or regulations.</li>
        <li>Infringe the rights of others, including intellectual property.</li>
        <li>Attempt to gain unauthorized access to our systems.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">
        All content on this website—including text, images, graphics, logos, and
        software—is the property of{" "}
        <a href="https://emons-bookshelf.netlify.app" className="font-bold">
          Bookshelf
        </a>{" "}
        or its content suppliers and is protected by copyright and other
        intellectual property laws.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. User Content</h2>
      <p className="mb-4">
        If you submit or post content (e.g., reviews, comments), you grant us a
        non-exclusive, royalty-free, perpetual license to use, reproduce, and
        display it. You are solely responsible for your content and must not
        violate any third-party rights.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Disclaimers</h2>
      <ul className="list-disc list-inside mb-4">
        <li>The website is provided "as is" without warranties of any kind.</li>
        <li>We do not guarantee the accuracy or reliability of any information on the site.</li>
        <li>We are not responsible for any damages resulting from your use of the website.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        To the fullest extent permitted by law,{" "}
        <a href="https://emons-bookshelf.netlify.app" className="font-bold">
          Bookshelf
        </a>{" "}
        and its affiliates shall not be liable for any direct, indirect,
        incidental, or consequential damages resulting from your access to or
        use of this website.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. External Links</h2>
      <p className="mb-4">
        This website may contain links to third-party websites. We are not
        responsible for the content or practices of those websites.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update or change these Terms and Conditions at
        any time. Any changes will be posted on this page with the updated date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Governing Law</h2>
      <p className="mb-4">
        These Terms and Conditions are governed by and construed in accordance
        with the laws of Bangladesh.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
      <p className="mb-2">If you have any questions about these Terms, please contact us at:</p>
      <ul className="list-disc list-inside">
        <li>Email: <a href="mailto:emonsheikh@gmail.com" className="font-bold text-blue-600">emonsheikh@gmail.com</a></li>
        <li>Phone: <a href="tel:+8801915367730" className="font-bold text-blue-600">+8801915367730</a></li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;