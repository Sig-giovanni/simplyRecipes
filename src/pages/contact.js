import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in Touch</h3>
            <p>
              I'm baby mustache squid bicycle rights, pinterest readymade food
              truck austin deep v church-key XOXO Brooklyn praxis direct trade
              fam flexitarian. XOXO pabst aesthetic ramps leggings single-origin
            </p>
            <p>
              Ethical sustainable cronut disrupt food truck chartreuse crucifix
              quinoa selvage austin
            </p>
            <p>
              Migas venmo cliche drinking vinegar, street art edison bulb bruh
              humblebrag offal tote bag disrupt pinterest umami thundercats.{" "}
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
