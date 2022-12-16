CREATE DATABASE perntodo;

CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);



CREATE TABLE signup (

"id" SERIAL PRIMARY KEY,

"firstname" text NOT NULL,

"lastname" text NOT NULL UNIQUE,

"email" text NOT NULL UNIQUE,

"password" varchar NOT NULL,

);