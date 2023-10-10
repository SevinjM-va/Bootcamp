-- Database: Actors

-- DROP DATABASE IF EXISTS "Actors";
select * from actors

CREATE TABLE actors(
actor_id SERIAL primary key,
first_name VARCHAR (30) NOT NULL,
last_name VARCHAR (50) NOT NULL,
birth_date date,
number_oscar integer
);





insert into actors (first_name,last_name,birth_date,number_oscar)
values ('Bred','Pitt','02/05/1980', 5),
('Katy','Pitt','02/05/1980', 8),
('Angelina','Jolie','05/08/1995', 10),
('John','Melon','02/05/2000', 4),
('Tom','Cruse','02/05/2010', 9),
('Lala','Mahnz','02/05/1960', 1),
('Matt','Lohn','02/05/1994', 12)

create table movies (
movie_id serial,
movie_name varchar(100) not null,
movie_story text,
actor_playing_id integer,
primary key (movie_id),
foreign key (actor_playing_id) references actors (actor_id)
);

select * from movies;

insert into movies (movie_name,movie_story, actor_playing_id)
values ('Good Will Hunting', 
    'Written by Affleck and Damon, the film follows 20-year-old South Boston janitor Will Hunting',
(select actor_id from actors where first_name ='Bred' and last_name = 'Pitt'));	
( 'Oceans Eleven','American heist film directed by Steven Soderbergh and written by Ted Griffin.', 
    (SELECT actor_id from actors WHERE first_name='Matt'));


	
SELECT actors.first_name, actors.last_name, movies.movie_name
FROM actors
INNER JOIN movies
ON actors.actor_id = movies.actor_playing_id;
