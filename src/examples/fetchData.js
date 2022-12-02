import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        person {
          age
          name
        }
        title
        simpleData
        complexData {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  const data = useStaticQuery(getData);
  const {
    site: { info },
  } = data;
  return (
    <div>
      <h1>{info.title}</h1>
    </div>
  );
};

export default FetchData;
