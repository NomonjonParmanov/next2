import React from "react";

const Contact = () => {
  return (
    <div className="contact container">
      <div className="cards">
        <div className="left">
          <h1>Get in touch</h1>
          <p>contact@e-comm.ng</p>
          <p>+234 4556 6665 34</p>
          <p>20 Prince Hakerem Lekki Phase 1, Lagos.</p>
        </div>
        <div className="right">
          <form>
            <label htmlFor="">Fullname</label>
            <input type="text" placeholder="James Doe" />
            <label htmlFor="">Email</label>
            <input type="text" placeholder="jamesdoe@gmail.com" />
            <label htmlFor="">Message</label>
            <textarea
              cols="10"
              rows="10"
              placeholder="Type your message"
            ></textarea>
          </form>
        </div>
      </div>
      <form className="form" action="">
        <input className="inp" type="text" placeholder="Search query..." />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Contact;
