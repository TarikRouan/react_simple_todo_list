import React from "react";

const Footer = ({ length }) => {
  // const today = new Date();
  return (
    <footer>
      {/* <p>Copyright &copy; {today.getFullYear()}</p> */}
      <p>
        {length} List {length === 1 ? "To-Do" : "To-Dos"}
      </p>
    </footer>
  );
};

export default Footer;
