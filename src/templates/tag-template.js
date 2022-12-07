import React from "react";
import { graphql } from "gatsby";
import RecipesList from "../components/RecipesList";
import Layout from "../components/Layout";

const TagTemplate = ({ data, pageContext }) => {
  const recipes = data.allContentfulGatsbyTutorial.nodes;
  return (
    <Layout>
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <RecipesList recipes={recipes} />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query GetRecipeByTag($tag: String) {
    allContentfulGatsbyTutorial(
      sort: { title: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default TagTemplate;
