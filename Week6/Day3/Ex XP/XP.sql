-- -- Database: dvdrental

-- -- DROP DATABASE IF EXISTS dvdrental;

-- CREATE DATABASE dvdrental
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;


--  1.
select * from language;
-- 2.
select * from film;

select film.title, film.description,language.name
from film 
inner join language
on film.film_id = language.language_id

-- 3.
select film.title, film.description,language.name
from film 
left join language
on film.film_id = language.language_id;

-- 4.
create table new_film(
film_id serial not null,
film_name varchar(200)not null,
	primary key(film_id)
)
select * from new_film

insert into new_film(film_name)
values ('monster'),('Homealone'),('Kid-e-cats'),('Moonzy')

-- create table customer_review(
-- review_id serial not null, 
-- film_id integer references new_film(film_id)on delete cascade,
-- language_id integer references language(language_id)
-- title varchar(150) not null,
-- score integer not null,
-- review_text text not null,
-- last_update date not null,
-- PRIMARY KEY (review_id)
-- );

select * from customer_review;


insert into customer_review (film_id, language_id, title, score,review_text,last_update)
values (3,2,
		'ipsum dolor sit amet consectetur adipisicing elit',
		5, 'sdasdasdas', '01/05/1996')

delete from new_film where film_id = 2;


-- Ex2

-- 1.

select * from language

select * from film 
inner join language
on film.language_id = language.language_id

update film
set language_id =3 where film_id = 1

-- 2.
select * from customer
-- parent cədvələ hər hansı bir məlumat daxil etdikdə foreign key də dəyişir

-- 3.
drop table customer_review;

-- 4

select * from rental
select * from rental where return_date is null;
-- !!! sayini isteyir
select COUNT(*) from rental WHERE return_date IS NULL;
-- !!!

-- 5.
select * from film order by replacement_cost DESC limit 30

-- !!! solution
select rental.rental_id, film.title, film.rental_rate
from (inventory join rental on inventory.inventory_id = rental.inventory_id)
join film on film.film_id = inventory.film_id
where return_date is null
order by rental_rate desc
limit 30
-- !!!
-- 6.1
select * from film_actor
select * from actor
select * from film

select * from film
inner join actor
on film_id = actor_id 
where actor.first_name = 'Penelope';

-- !!! solution
select film.title
from (actor join film_actor on actor.actor_id = film_actor.actor_id)
join film on film.film_id = film_actor.film_id
where film.description like '%Sumo%' 
and actor.first_name = 'Penelope' 
and actor.last_name = 'Monroe'
-- !!!


-- 6.2
select * from film 
where length > 60 and rating = 'R'

-- 6.3
select * from film 
inner join rental
on film_id = rental_id
where return_date between '2005-07-28' and '2008-08-01'

select * from rental

select*from payment

select * from film
where title ilike '%boat%'
or description ilike '%boat%'
order by replacement_cost DESC

-- !!! solution 4th film
SELECT film.title, film.description, film.replacement_cost
FROM film
JOIN inventory
ON film.film_id = inventory.film_id
JOIN rental
ON rental.inventory_id = inventory.inventory_id
JOIN customer
ON rental.customer_id = customer.customer_id
where customer.first_name = 'Matthew'
and customer.last_name = 'Mahan'
and film.title like '%Boat%' 
or film.description like '%Boat%'
order by film.replacement_cost desc
limit 1
-- !!!