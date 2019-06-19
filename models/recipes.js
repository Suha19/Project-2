module.exports = function (sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {

    name_of_meal: DataTypes.STRING,
    descriptions: DataTypes.STRING,
    prep_time: DataTypes.STRING,
    caloric_content: DataTypes.STRING,
    servings: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    cooking_instructions: DataTypes.STRING,
    meal_images: DataTypes.STRING,
    recipe_type: DataTypes.ENUM("Breakfast", "Lunch", "Dinner")
   
  });

  Recipes.associate = function (models) {
    // We're saying that a recipes should belong to an chef
    // A recipes can't be created without an chef due to the foreign key constraint
    Recipes.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipes;
};