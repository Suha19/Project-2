$(document).ready(function() {
  /* global moment */

  
  function postRecipe(mealType) {
    
      var mealTypeString = mealType || "";
      if (mealTypeString) {
        mealTypeString = "/mealType/" + mealTypeString;
      }
      $.get("/api/recipes" + mealTypeString, function(data) {
        console.log("recipes", data);
        recipes = data;
       
      });
    }
  
    $.get("/api/recipes" , function(data) {
     
        $("#recName").text(data.name_of_meal);
        $("#recDescrip").text(data.descriptions);
        $("#ingredients").text(data.prep_time);
        $("#prep_time").text(data.caloric_content);
        $("#caloric_content").text(data.servings);
        $("#servings").text(data.ingredients);
        $("#cookInstruct").text(data.cooking_instructions);
        $("#mealType").text(data.recipe_type);
        $("#avatar").text(data.meal_images);
       
      console.log("recipes", data);
      recipes = data;
      
    });
   
  $("#addRecipe").click(function(event){
    
    event.preventDefault();

    // Don't do anything if the name fields hasn't been filled out
    var recipe = {
      name_of_meal: $("#recName").val(),
      descriptions:$("#recDescrip").val(),
      ingredients:$("#ingredients").val(),
      prep_time:$("#prep_time").val(),
      caloric_content:$("#caloric_content").val(),
      servings:$("#servings").val(),
      cooking_instructions:$("#cookInstruct").val(),
      recipe_type:$("#mealType").val(),
      meal_image:$("#avatar").val(),
      UserId: localStorage.getItem("userID")
    }

    $.post("/api/recipe",recipe)
    .then(function(data){
      console.log(data);
    })
  })
});

