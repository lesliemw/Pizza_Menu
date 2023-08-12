import React from "react";

function Footer() {
  const currentHour = new Date().getHours();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <footer className="footer">
      It is {currentTime} and we are
      {currentHour >= 12 && currentHour <= 22
        ? " open until 11pm."
        : " closed. Our opening hours are 12pm to 11pm each day."}
    </footer>
  );
}

export default Footer;
