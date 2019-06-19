$(document).ready(function() {
  // Gets an optional query string from our url (i.e. ?recipe_id=23)
  var url = window.location.search;
  var recipeID;
  // Sets a flag for whether or not we're updating a recipe to be false initially
  var updating = false;

  // If we have this section in our url, we pull out the recipe id from the url
  
  if (url.indexOf("?recipe_id=") !== -1) {
    recipeId = url.split("=")[1];
    getRecipeData(recipeId, "recipe");
  }
  // Otherwise if we have an user_id in our url, preset the user select box to be our user
  else if (url.indexOf("?user_id=") !== -1) {
    userId = url.split("=")[1];
  }

  // Getting the users, and their recipes
  getUsers();

  // Getting jQuery references to the recipe recName, recDescrip, form, and category select
  var recName = $("#recName");
  var recDescrip = $("#recDescrip");
  var prep_time = $("#prep_time");
  var caloric_content = $("#caloric_content");
  var servings = $("#servings");
  var ingredients = $("#ingredients");
  var cookInstruct = $("#cookInstruct");
  var userSelect = $("#user");
  var mealType = $("#mealType");
  // Giving the mealType a default value
  mealType.val("");
  // Adding an event listener for when the form is submitted
  $(addForm).on("submit", function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the recipe if we are missing a recName or a recDescrip
    if (!recName.val().trim() || !recDescrip.val().trim() || !prep_time.val().trim() || !caloric_content.val().trim() || 
    !servings.val().trim() || !ingredients.val().trim() || !cookInstruct.val().trim() || !userSelect.val()) {
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
      category: mealType.val(),
      userID: userSelect.val()
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
  // function getRecData(id) {
  //   var queryUrl;
  //   switch (type) {
  //   case "recipe":
  //     queryUrl = "/api/recipes/" + id;
  //     break;
  //   case "user":
  //     queryUrl = "/api/users/" + id;
  //     break;
  //   default:
  //     return;
  //   }
    $.get("/api/recipes/" + id, function(data) {
      if (data) {
        console.log(data.userID || data.id);
        // If this recipe exists, prefill our addRecipe forms with its data
        
        recName.val(data.recName);
        recDescrip.val(data.recDescrip);
        prep_time.val(data.prep_time);
        caloric_content.val(data.caloric_content);
        servings.val(data.servings);
        ingredients.val(data.ingredients);
        cookInstruct.val(data.cookInstruct);
        mealType.val(data.category);
        userID = data.userID || data.id;
        // If we have a recipe with this id, set a flag for us to know to update the recipe
        // when we hit submit
        updating = true;
      }
    });
  

  function getUsers() {
    $.get("/api/users", renderUserList);
  }

  // function renderUserList(data) {
  //   if (!data.length) {
  //     window.location.href = "/signup";
  //   }
  //   $(".hidden").removeClass("hidden");
  //   var rowsToAdd = [];
  //   for (var i = 0; i < data.length; i++) {
  //     rowsToAdd.push(createUserRow(data[i]));
  //   }
  //   userSelect.empty();
  //   console.log(rowsToAdd);
  //   console.log(userSelect);
  //   userSelect.append(rowsToAdd);
  //   userSelect.val(userID);
  // }

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
