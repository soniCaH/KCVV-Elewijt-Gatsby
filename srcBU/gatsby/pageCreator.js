const createTeams = (list, createPage, template) => {
  list.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: template,
      context: {
        slug: node.path.alias,
      },
    });
  });
};

const createPlayers = (list, createPage, template, shareTemplate) => {
  list.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: template,
      context: {
        slug: node.path.alias,
      },
    });
    createPage({
      path: `${node.path.alias}/share`,
      component: shareTemplate,
      context: {
        slug: node.path.alias,
      },
    });
  });
};

const createStaff = (list, createPage, template) => {
  list.forEach(({ node }) => {
    createPage({
      path: node.path.alias,
      component: template,
      context: {
        slug: node.path.alias,
      },
    });
  });
};

module.exports = {
  createTeams,
  createPlayers,
  createStaff,
};
