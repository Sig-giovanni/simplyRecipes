import React from "react";
import TagList from "./TagList";
import RecipesList from "./RecipesList";
import { graphql, useStaticQuery } from "gatsby";

export const query = graphql`
  query {
    allContentfulGatsbyTutorial(sort: { title: ASC }) {
      nodes {
        cookTime
        prepTime
        id
        title
        content {
          tags
        }
        image {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const data = useStaticQuery(query);
  const recipes = data.allContentfulGatsbyTutorial.nodes;
  console.log(recipes);
  return (
    <section className="recipes-container">
      <TagList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
