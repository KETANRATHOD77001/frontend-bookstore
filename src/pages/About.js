import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Our bookstore is dedicated to providing high-quality books and exceptional service. We believe in transparency, honesty, and making our products accessible to everyone. Our team is committed to ensuring customer satisfaction and improving the shopping experience. Contact us with any questions or feedback. Thank you for choosing us as your online bookstore destination.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
