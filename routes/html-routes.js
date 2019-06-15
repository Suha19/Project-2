
// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipes.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // recipe route loads recipe.html
  app.get("/recipe", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/recipes.html"));
  });

  // chef route loads chef-manager.html
  app.get("/chef", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/chefs.html"));
  });

};
