import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>We collect personal information such as name, address, and payment details when you make a purchase, create an account or sign up for our newsletter.</p>
          <p>We do not share your personal information with third parties.</p>
          <p>We use industry-standard security measures to protect your personal information.</p>
          <p>We use cookies to improve your browsing experience and track website traffic.</p>
          <p>Third-party services, such as payment processors and shipping providers, have their own privacy policies.</p>
          <p>You have the right to access, modify, or delete your personal information.</p>
          <p>We may update this policy at any time.</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
