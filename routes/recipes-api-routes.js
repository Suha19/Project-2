// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the recipes
  app.get("/api/recipes", function(req, res) {
    var query = {};
    if (req.query.chef_id_id) {
      query.chefId = req.chef_id;
    }
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.chef
    db.recipes.findAll({
      where: query,
      include: [db.chef]
    }).then(function(dbrecipe) {
      res.json(dbrecipe);
    });
  });

  // Get route for retrieving a single recipe
  app.get("/api/recipes/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.chef
    db.recipes.findOne({
      where: {
        id: req.params.id
      },
      include: [db.chef]
    }).then(function(dbrecipe) {
      res.json(dbrecipe);
    });
  });

  // recipe route for saving a new recipe
  app.recipe("/api/recipes", function(req, res) {
    db.recipes.create(req.body).then(function(dbrecipe) {
      res.json(dbrecipe);
    });
  });

  // DELETE route for deleting recipes
  app.delete("/api/recipes/:id", function(req, res) {
    db.recipes.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbrecipe) {
      res.json(dbrecipe);
    });
  });

  // PUT route for updating recipes
  app.put("/api/recipes", function(req, res) {
    db.recipes.update(
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
