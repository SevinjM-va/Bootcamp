-- -- Database: Actors

-- -- DROP DATABASE IF EXISTS "Actors";

-- CREATE DATABASE "Actors"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

select * from actors;

create table country(
country_id serial primary key,
coutry_name varchar(100) not null
);

select * from country;

insert into country (coutry_name) 
values ('Japan'),('Indonesia'),('Austria');

select actors.first_name,coutry_name from actors 
full join country
on actors.actor_id = country.country_id;













create table cars (
car_id serial primary key,
car_name varchar(50) not null,
car_color varchar(100) not null
)

select * from cars;

insert into colors (car_color,car_name) 
values(select color_id from colors where color = 'black','Mazda')
-- ('BMW'),('Bugatti'),('Mersedes')

create table colors (
color_id serial primary key,
color varchar(50) not null
)
select * from colors;

insert into colors (color) 
values('blue'),('violet'),('gray'),('pink')

select car_name, color from cars
full join colors
on cars.car_id = colors.color_id;