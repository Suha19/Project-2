$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?recipe_id=23)
  var url = window.location.search;
  var recipeID;
  // Sets a flag for whether or not we're updating a recipe to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the recipe id from the url
  
  if (url.indexOf("?recipe_id=") !== -1) {
    recipeID = url.split("=")[1];
    getRecData(recipeID);
  }

  // Getting jQuery references to the recipe recName, recDescrip, form, and category select
  var recName = $("#recName");
  var recDescrip = $("#recDescrip");
  var prep_time = $("#prep_time");
  var caloric_content = $("#caloric_content");
  var servings = $("#servings");
  var ingredients = $("#ingredients");
  var cookInstruct = $("#cookInstruct");
 
  var mealType = $("#mealType");
  // Giving the mealType a default value
  mealType.val("");
  // Adding an event listener for when the form is submitted
  $(addForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the recipe if we are missing a recName or a recDescrip
    if (!recName.val().trim() || !recDescrip.val().trim() || !prep_time.val().trim() || !caloric_content.val().trim() || 
    !servings.val().trim() || !ingredients.val().trim() || !cookInstruct.val().trim()) {
      return;
    }
    // Constructing a newRecipe object to hand to the database
    var newRecipe = {
      
      recName: recName.val().trim(),
      recDescrip: recDescrip.val().trim(),
      prep_time: prep_time.val().trim(),
      caloric_content: caloric_content.val().trim(),
      servings: servings.val().trim(),
      ingredients: ingredients.val().trim(),
      cookInstruct: cookInstruct.val().trim(),
      category: mealType.val()
    };

    console.log(newRecipe);

    // If we're updating a recipe run updateRecipe to update a recipe
    // Otherwise run submitRecipe to create a whole new recipe
    if (updating) {
      newRecipe.id = recipeID;
      updateRecipe(newRecipe);
    }
    else {
      submitRecipe(newRecipe);
    }
  });

  // Submits a new recipe and brings user to blog page upon completion
  function submitRecipe(recipe) {
    $.recipe("/api/recipes/", recipe, function() {
      window.location.href = "/addRecipe";
    });
  }

  // Gets recipe data for a recipe if we're editing
  function getRecData(id) {
    $.get("/api/recipes/" + id, function(data) {
      if (data) {
        // If this recipe exists, prefill our addRecipe forms with its data
        
        recName.val(data.recName);
        recDescrip.val(data.recDescrip);
        prep_time.val(data.prep_time);
        caloric_content.val(data.caloric_content);
        servings.val(data.servings);
        ingredients.val(data.ingredients);
        cookInstruct.val(data.cookInstruct);
        mealType.val(data.category);
        // If we have a recipe with this id, set a flag for us to know to update the recipe
        // when we hit submit
        updating = true;
      }
    });
  }

  // Update a given recipe, bring user to the blog page when done
  function updateRecipe(recipe) {
    $.ajax({
      method: "PUT",
      url: "/api/recipes",
      data: recipe
    })
      .then(function() {
        window.location.href = "/addRecipe";
      });
  }
});
