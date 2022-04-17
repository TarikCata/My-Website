import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, val } = e.target;
    setValues({
      ...values,
      [name]: val,
    });
  };

  const clean = () =>
    setValues({
      first_name: "",
      last_name: "",
      email: "",
      message: "",
    });

  const sendMail = (e) => {
    e.preventDefault();
    if (
      values.first_name !== "" &&
      values.last_name !== "" &&
      values.email !== "" &&
      values.message !== ""
    ) {
      emailjs
        .sendForm(
          "service_s9iyx8p",
          "template_pxghptp",
          "form",
          "RJauGj-HeI2VJ5i5T"
        )
        .then(
          (result) => {
            alert("Succesfuly sent");
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      clean();
    } else {
      alert("Fill all inputs...don't send me some jibberish");
    }
  };

  return (
    <>
      <div className="contact-container" id="contact">
        <div className="contact-title">
          <h1 className="title-content">Contact</h1>
        </div>
        <form onSubmit={sendMail} className="form">
          <div className="contact-elements">
            <div className="contact-inputs">
              <input
                type="text"
                className="input-elements"
                placeholder="First name.."
                name="first_name"
                value={values.name}
                onChange={handleChange}
              />
              <input
                type="text"
                className="input-elements"
                placeholder="Last Name.."
                name="last_name"
                value={values.lastname}
                onChange={handleChange}
              />
              <input
                type="text"
                className="input-elements"
                placeholder="example@gmail.com"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="contact-message">
              <textarea
                cols="30"
                rows="10"
                placeholder="Message.."
                name="message"
                value={values.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className="btn-contact">
            <button className="contact-btn">Send Message</button>
          </div>
        </form>
        <div className="icons">
          <FaGithub
            onClick={() => {
              window.location.href = "https://github.com/TarikCata";
            }}
            className="icon"
          ></FaGithub>
          <FaLinkedin className="icon"></FaLinkedin>
          <FaInstagram
            onClick={() => {
              window.location.href = "https://www.instagram.com/tarik.cata";
            }}
            className="icon"
          ></FaInstagram>
          <FaWhatsapp
            onClick={() => {
              window.location.href =
                "https://api.whatsapp.com/send?phone=38761200859&text=(tarik.cata)%20Hi&fbclid=IwAR0fWi6dIkCIBe3_SellzJtcVPOG9lFyCYlRPFu0NQ7QWhTTpyds522_PcM";
            }}
            className="icon"
          ></FaWhatsapp>
        </div>
      </div>
    </>
  );
}

export default Contact;
