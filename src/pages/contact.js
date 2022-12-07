import React from "react";
import Layout from "../components/Layout";
import RecipesList from "../components/RecipesList";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

const Contact = ({
  data: {
    allContentfulGatsbyTutorial: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact" />
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
        <section className="featured-recipes">
          <h5>Look at this awesome sauce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulGatsbyTutorial(
      sort: { title: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        cookTime
        prepTime
        id
        title
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default Contact;
