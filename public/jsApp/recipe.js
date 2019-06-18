$(document).ready(function() {
    /* global moment */
  
    // recContainer holds all of our recipes
    // var recContainer = $(".res-container");
    // var mealTypeSelect = $("#mealType");
    // Click events for the edit and delete buttons
    // $(document).on("click", "button.delete", handlerecipeDelete);
    // $(document).on("click", "button.edit", handlerecipeEdit);
    // Variable to hold our recipes
    // var recipes;
  
    // The code below handles the case where we want to get res recipes for a specific chef
    // Looks for a query param in the url for chef_id
    // var url = window.location.search;
    // var chefId;
    // if (url.indexOf("?chef_id=") !== -1) {
    //   chefId = url.split("=")[1];
    //   getrecipes(chefId);
    // }
    // // If there's no chefId we just get all recipes as usual
    // else {
    //   getrecipes();
    // }
  
  
    // This function grabs recipes from the database and updates the view
    // function getrecipes(chef) {
    //   chefId = chef || "";
    //   if (chefId) {
    //     chefId = "/?chef_id=" + chefId;
    //   }
    //   $.get("/api/recipes" + chefId, function(data) {
    //     console.log("recipes", data);
    //     recipes = data;
    //     if (!recipes || !recipes.length) {
    //       displayEmpty(chef);
    //     }
    //     else {
    //       initializeRows();
    //     }
    //   });
    // }
  
    // This function does an API call to delete recipes
    // function deleterecipe(id) {
    //   $.ajax({
    //     method: "DELETE",
    //     url: "/api/recipes/" + id
    //   })
    //     .then(function() {
    //       getrecipes(mealTypeSelect.val());
    //     });
    // }
  
    // InitializeRows handles appending all of our constructed recipe HTML inside recContainer
    // function initializeRows() {
    //   recContainer.empty();
    //   var recipesToAdd = [];
    //   for (var i = 0; i < recipes.length; i++) {
    //     recipesToAdd.push(createNewRow(recipes[i]));
    //   }
    //   recContainer.append(recipesToAdd);
    // }
  
    // This function constructs a recipe's HTML
    // function createNewRow(recipe) {
      

    // }
  
    // This function figures out which recipe we want to delete and then calls deleterecipe
    // function handlerecipeDelete() {
    //   var currentRecipe = $(this)
    //     .parent()
    //     .parent()
    //     .data("recipe");
    //   deleterecipe(currentRecipe.id);
    // }
  
    // This function figures out which recipe we want to edit and takes it to the appropriate url
    // function handlerecipeEdit() {
    //   var currentRecipe = $(this)
    //     .parent()
    //     .parent()
    //     .data("recipe");
    //   window.location.href = "/?recipe_id=" + currentRecipe.id;
    // }
  

  });
  