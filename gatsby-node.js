const path = require(`path`);
const slugify = require("slugify");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const tagTemplate = path.resolve(`src/templates/tag-template.js`);

  const result = await graphql(`
    query GetRecipes {
      allContentfulGatsbyTutorial {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  result.data.allContentfulGatsbyTutorial.nodes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      const tagSlug = slugify(tag, { lower: true });
      createPage({
        path: `/tags/${tagSlug}`,
        component: tagTemplate,
        context: {
          tag: tag,
        },
      });
    });
  });
};
