// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the recipe
  app.get("/api/recipe", function(req, res) {
    var query = {};
    if (req.query.user_id) {
      query.userID = req.query.user_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.users
    db.recipe.findAll({
      where: query,
      include: [db.users]
    }).then(function(dbrecipe) {
      res.json(dbrecipe);
    });
  });

  // Get route for retrieving a single recipe
  app.get("/api/recipe/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.users
    db.recipe.findOne({
      where: {
        id: req.params.id
      },
      include: [db.users]
    }).then(function(dbrecipe) {
      res.json(dbrecipe);
    });
  });

  // recipe route for saving a new recipe
  // app.recipe("/api/recipe", function(req, res) {
  //   db.recipe.create(req.body).then(function(dbrecipe) {
  //     res.json(dbrecipe);
  //   });
  // });

  // DELETE route for deleting recipe
  app.delete("/api/recipe/:id", function(req, res) {
    db.recipe.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbrecipe) {
      res.json(dbrecipe);
    });
  });

  // PUT route for updating recipe
  app.put("/api/recipe", function(req, res) {
    db.recipe.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbrecipe) {
      res.json(dbrecipe);
    });
  });
};

