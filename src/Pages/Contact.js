import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import styled from "styled-components";


function Contact() {
  const contact = {
    email: "kdkapadia6104@gmail.com",
    phone: "+91 93168 64516",
    linkedin: "https://www.linkedin.com/in/krish-kapadia-25956228b",
    github: "https://github.com/KrishKapadia09",
  };

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    message: "",
  });

  // Handle input change
  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Submit form data
  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, email, address, message } = userData;

    if (firstName && lastName && email && address && message) {
      try {
        const res = await fetch(
          "https://my-portfolio-9090c-default-rtdb.firebaseio.com/userDataRecords.json",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
          }
        );

        if (res.ok) {
          setUserData({
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            message: "",
          });

          event.target.reset(); // Reset form fields
          alert("Thanks, your message has been sent successfully.");
        } else {
          alert("Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting data:", error);
        alert("Something went wrong! Please try again.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <Wrapper>
      <section className="card-inner contacts" id="contacts-card">
        <div className="card-wrap">
          <div className="content contacts">
            <div className="title" data-aos="fade-up">
              <span className="first-word">Get </span> in Touch
            </div>

            <div className="row">
              <div className="col col-12 border-line-v">
                <div className="map">
                  <iframe
                    title="map"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    loading="lazy"
                    src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=23.071664,72.577042(Location)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="row">

              <div className="contact-info">
                <p>Email: <a href={`mailto:${contact.email}`}>{contact.email}</a></p>
                <p>Phone: <a href={`tel:${contact.phone}`}>{contact.phone}</a></p>
                <p>LinkedIn: <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">View Profile</a></p>
                <p>GitHub: <a href={contact.github} target="_blank" rel="noopener noreferrer">View Profile</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Contact;

const Wrapper = styled.section`
  .content {
    position: relative;
    margin: 0 0 40px 0;

    &:last-child {
      margin-bottom: 30px;
    }
    input,
    textarea,
    button {
      transition: all 0.3s ease 0s;
      box-shadow: 5px 5px 10px rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.2);
    }
    .title {
      color:  rgb(${({ theme }) => theme.title.primary});

      &:after {
        content: "";
        position: absolute;
        height: 1px;
        left: -30px;
        right: 0;
        bottom: 0;
        width: auto;
        background:  ${({ theme }) => theme.border.gradient2};
      }
    }

    .alert-success {
      display: none;
    }

    .contacts .row {
      .col {
        flex: none;

        textarea {
          padding: 15px;
          height: 94px;
        }
      }
        .icon {
          font-size: 1.2rem;
          margin: 0 6px;
        }

        button {
          
          box-shadow: 5px 5px 10px rgba(${({ theme }) => theme.highlight.rgb.primary}, 0.2);
          &:hover {
            background: ${({ theme }) => theme.highlight.primary};
            border: none;
            .icon {
              margin-left: 10px;
            }
          }
        }
      
    }
  }
`;
