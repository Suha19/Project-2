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
    recipe_type_id INT NOT NULL AUTO_INCREMENT,
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