import React from "react";
import Link from "next/link";
import ContactItem from "@/components/side-bar/contact-item";
import { LuGithub, LuLinkedin, LuMail, LuMapPin } from "react-icons/lu";

import "@/styles/side-bar/contact-list.css";

function ContactsList() {
  return (
    <ul className="contacts-list">
      <ContactItem icon={LuMapPin} title="Location">
        <address className="text-white-2 text-sm font-light">Pune, India</address>
      </ContactItem>

      <ContactItem icon={LuMail} title="Email">
        <Link
          href="mailto:milansharma942105@gmail.com"
          className="block text-white-2 text-sm font-light custom-lg:truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          milansharma942105@gmail.com
        </Link>
      </ContactItem>

      <ContactItem icon={LuGithub} title="Github">
        <Link
          href="https://github.com/MilannSharma"
          className="contact-link block text-white-2 text-sm font-light custom-lg:truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          MilannSharma
        </Link>
      </ContactItem>

      <ContactItem icon={LuLinkedin} title="Linkedin">
        <Link
          href="https://www.linkedin.com/in/milansharma01"
          className="contact-link block text-white-2 text-sm font-light custom-lg:truncate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Milan Sharma
        </Link>
      </ContactItem>
    </ul>
  );
};

export default ContactsList;
