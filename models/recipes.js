module.exports = function (sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {

    name_of_meal: DataTypes.STRING,
    descriptions: DataTypes.STRING,
    prep_time: DataTypes.STRING,
    caloric_content: DataTypes.INTEGER,
    servings: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    cooking_instructions: DataTypes.STRING,
    meal_image: DataTypes.STRING,
    recipe_type: DataTypes.ENUM("Breakfast", "Lunch", "Dinner")

   
  });

  Recipes.associate = function (models) {
    
    Recipes.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Recipes;
};