import React from "react";

function Footer() {
  const currentHour = new Date().getHours();
  const currentTime = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <footer className="footer">
      <div className="order">
        <div>
          It is {currentTime} and we are
          {currentHour >= 12 && currentHour < 22
            ? " open until 22:00."
            : " closed. Our opening hours are 12:00 to 22:00 each day."}
        </div>
        <button className="btn">Order</button>
      </div>
    </footer>
  );
}

export default Footer;
