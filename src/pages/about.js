import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import RecipesList from "../components/RecipesList";
import { graphql } from "gatsby";
import SEO from "../components/SEO";

const About = ({
  data: {
    allContentfulGatsbyTutorial: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="About" />
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

export default About;
