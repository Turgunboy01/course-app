import React from "react";
import ContactBanner from "../../components/contact/ContactBanner";
import ContactEmails from "../../components/contact/ContactEmails";

const ContactContainer = () => {
  return (
    <div className=" overflow-hidden">
      <ContactBanner />
      <ContactEmails />
    </div>
  );
};

export default ContactContainer;
