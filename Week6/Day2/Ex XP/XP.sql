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



-- 1.
select * from customer;

-- 2.
select (first_name, last_name) as full_name from customer;

-- 3.
select distinct create_date from customer;

-- 4.
select * from customer order by first_name DESC

-- 5.
select * from film
select film_id,title,description,release_year from film order by rental_rate ASC;

-- 6.
select * from address;
select address,phone from address where district = 'Texas';

-- 7.
select * from film where film_id between '15' and '150'; 

-- 8.
select * from film
select film_id,title,description,length,rental_rate from film
where title = 'Grosse Wonderful';

-- 9.
select film_id,title,description,length,rental_rate from film
where title 
like 'Gr%'

-- 10.
select * from film order by replacement_cost ASC limit 20;

-- 11.
select * from film order by replacement_cost ASC limit 20 offset 10;
   
-- 12.
select * from customer
select * from payment

select payment.customer_id, first_name,last_name, amount, payment_date
from customer
inner join payment
on payment.customer_id


-- 13
select * from inventory
select * from film
where film_id not in ( select film_id from inventory);

-- 14.
select * from city
select * from country

select * from city 
inner join country 
on city.country_id = country.country_id

-- 15.
select *  from customer
select * from payment

select customer.customer_id, customer.first_name,customer.last_name,payment.amount,payment.payment_date 
from customer
inner join payment
on customer.customer_id = payment.customer_id







