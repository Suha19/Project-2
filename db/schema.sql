DROP DATABASE IF EXISTS wikifoodia;
CREATE DATABASE wikifoodia;
USE wikifoodia;
-- create tables with primary key that auto increases
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR (50)NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(50) NOT NULL,
    primary KEY(id)
    );
CREATE TABLE recipe(
    id INT NOT NULL AUTO_INCREMENT,
    recipe_type_id INT NOT NULL,
    name_of_meal VARCHAR(100),
    descriptions VARCHAR (1000),
    ingredients VARCHAR (800), 
    prep_time VARCHAR(30),
    caloric_content INT,
    cooking_instructions VARCHAR(1000),
    servings INT,
    meal_images VARCHAR (200),
    user_id VARCHAR (100),
       primary KEY(id)
);
CREATE TABLE ingredients(
    id INT NOT NULL AUTO_INCREMENT,
    item_name VARCHAR (50),
       primary KEY(id)
);
CREATE TABLE recipe_type(
    id INT NOT NULL AUTO_INCREMENT,
    meal_type VARCHAR (50),
	primary KEY(id)
    );
    INSERT INTO recpipes (name_of_meal, descriptions, ingredients, prep_time, caloric_content, cooking_instructions, servings, meal_image ) 
values ('bacon fritata', 'Bacon and egg based breakfast dish', '5 bacon strips, 6 eggs, beaten, 1-ounce Parmesan, grated, 1/2 teaspoon black pepper, Pinch salt, 1 teaspoon butter, 1/2 cup chopped roasted asparagus, 1/2 cup chopped country ham, 1 tablespoon chopped parsley leaves', ' 30 minutes', '177', 'Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 7x11-inch baking dish.
Place bacon in a large skillet and cook over medium-high heat, turning occasionally, until evenly browned, about 10 minutes. Drain bacon slices on paper towels and crumble.
Beat eggs, milk, butter, salt, and ground pepper in a bowl; pour into prepared baking dish. Sprinkle with onions, bacon, and Cheddar cheese.
Bake in preheated oven until a knife inserted near the center comes out clean, 25 to 30 minutes.', '6', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPTqXhYvIxOwzCWdxPaFz4YC2gMJopdvKdFwrDuEEZ8FMs6vl-7w'
 );
