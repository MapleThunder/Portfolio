import React from "react";
import styled from "styled-components";
import { BiEnvelope } from "react-icons/bi";

const Form = styled.form`
  input,
  textarea {
    max-width: 500px;
    width: 100%;
  }

  > div + div {
    margin-top: 10px;
  }

  button[type="submit"] {
    margin-top: 25px;
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
    }

    &:hover {
      color: var(--black);
    }
  }

  @media (min-width: 700px) {
    input {
      width: 45%;
    }
    textarea {
      width: 65%;
    }
  }
  @media (min-width: 900px) {
    input {
      width: 25%;
    }
    textarea {
      width: 33%;
    }
  }
`;

const ContactForm = () => {
  return (
    <section id="contact">
      <h2 id="contact">Contact Me</h2>
      <Form
        method="post"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message."
          ></textarea>
        </div>
        <button type="submit">
          Send
          <BiEnvelope />
        </button>
      </Form>
    </section>
  );
};

export default ContactForm;
