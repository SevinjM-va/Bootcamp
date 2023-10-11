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
select * from film;

-- 2.
select * from film where rating in ('G','PG-13');
-- 2.1
select * from film where rating in ('G','PG-13') 
and length < 120 
and rental_rate < 3 order by title ASC;

-- 3.
select * from customer;

update customer 
set first_name='Sevinj', last_name='Mammdova'
where first_name = 'Maria' and last_name='Miller'
returning
customer_id,
first_name,
last_name,
email;

select * from address

select customer.customer_id,
customer.first_name,
customer.last_name,
address.address;
from customer
inner join address
on customer.customer_id = address.customer_id





