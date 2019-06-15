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
    
CREATE TABLE recipe_type(
    id INT NOT NULL AUTO_INCREMENT,
    meal_type VARCHAR (50),
	primary KEY(id)
    );
    
CREATE TABLE recipe(
    id INT NOT NULL AUTO_INCREMENT,
    name_of_meal VARCHAR(100),
    descriptions VARCHAR (1000),
    ingredients VARCHAR (1000), 
    prep_time VARCHAR(100),
    caloric_content VARCHAR(100),
    servings VARCHAR(100),
    cooking_instructions VARCHAR(1000),
    meal_images VARCHAR (200),
    user_id INT,
	recipe_type_id INT,
	PRIMARY KEY(id),
	FOREIGN KEY (user_id) REFERENCES users (id),
	FOREIGN KEY (recipe_type_id) REFERENCES recipe_type (id)
	
);
