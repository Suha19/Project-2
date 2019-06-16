module.exports = function (sequelize, DataTypes) {
  var recipes = sequelize.define("recipes", {

    name_of_meal: DataTypes.STRING,
    descriptions: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    prep_time: DataTypes.STRING,
    caloric_content: DataTypes.STRING,
    servings: DataTypes.STRING,
    cooking_instructions: DataTypes.STRING,
    meal_images: DataTypes.STRING,
    recipe_type_id: {
      type: DataTypes.STRING,
      defaultValue: "breakfast"
    }

  });

  console.log(recipes)

  // recipes.associate = function (models) {
  //   // We're saying that a recipes should belong to an chef
  //   // A recipes can't be created without an chef due to the foreign key constraint
  //   recipes.belongsTo(models.chef, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  module.exports = recipes;
  return recipes;
};