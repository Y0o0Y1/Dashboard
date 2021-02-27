import React, { useState } from 'react'
import "./section.css";
import Modal from './Modal'


const Section = ({ title, content, imgSrc, btnConent, email, download }) => {
  const [isOpen, setIsOpen] = useState(false)
  const onClose = ()=> setIsOpen(false)
  if (email) {
    return (
      <section className="card">
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
            <h3 className="modal-title">Transfer</h3>
            <input placeholder="Enter The Email Adress" type="text"></input>
            <div className="modal-btns">
              <button className="cancel-btn" onClick={onClose}>Cancel</button>
              <button className="send-btn" style={{marginLeft:"10px"}}>Send</button>
            </div>
        </Modal>
        <div className="title">
          <img src={imgSrc} alt="img"></img>
          <p>{title}</p>
        </div>
        <h4 className="user">{content}</h4>
        <button onClick={() => setIsOpen(true)} style={{ color: "green" }}> {btnConent} </button>
        <p className="email">{email}</p>
      </section>
    );
  } else if (download) {
    return (
      <section className="card download-section">
        <div className="desktop">
          <img src={download.desktop} alt="" />
          <p>Desktop App </p>
        </div>
        <div className="download">
          <img src={download.mac} alt="" />
          <img src={download.windows} alt="" />
        </div>
      </section>
    );
  } else
    return (
      <section className="card">
        <div className="title">
          <img src={imgSrc} alt="img"></img>
          <p>{title}</p>
        </div>
        <h4 className="user">{content}</h4>
        <button> {btnConent} </button>
      </section>
    );
};

export default Section;
