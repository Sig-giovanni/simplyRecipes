import React from "react";
import Layout from "../components/Layout";
import { graphql, Link } from "gatsby";
import setUpTags from "../utils/setUpTags";
import slugify from "slugify";

const Tags = ({ data }) => {
  const newTags = setUpTags(data.allContentfulGatsbyTutorial.nodes);
  return (
    <Layout>
      <main className="page">
        <section className="tags-page">
          {newTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, { lower: true });
            return (
              <Link key={index} to={`/tags/${slug}`} className="tag">
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulGatsbyTutorial {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Tags;
