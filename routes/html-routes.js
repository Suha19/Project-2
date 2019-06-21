
// Dependencies
// =============================================================
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
// Routes
// =============================================================
module.exports = function(app) {

  // index route loads home
  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/home.html"));
    res.render("home")
  });

  // recipe route loads allrecipe
  app.get("/allRecipe", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/allRecipes.html"));
    res.render("allRecipe")
  });

  // add recipe route loads add recipe.html
  app.get("/addRecipe", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
    if (req.user) {
      res.redirect("/members");
      res.sendFile(path.join(__dirname, "../public/login.html"));
      res.sendFile(path.join(__dirname, "../public/addRecipe.html"));
    }else{
      res.sendFile(path.join(__dirname, "../public/signup.html")); 
      
    }
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

 

};

