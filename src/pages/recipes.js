import React from "react";
import Layout from "../components/Layout";
import AllRecipes from "../components/AllRecipes";
import SEO from "../components/SEO";

const Recipes = () => {
  <SEO title="Recipe" />;
  return (
    <Layout>
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default Recipes;
