import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby whatever gluten-free DSA,</h2>
            <p>
              Lumbersexual flexitarian gluten-free, yr put a bird on it vice
              succulents selfies tumblr truffaut praxis.
            </p>
            <p>
              Sartorial fam scenester occupy cold-pressed, yes plz man bun four
              dollar toast you probably
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring salt in bowl"
            className="about-img"
            placeholder="blurred"
            as={"div"}
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;
