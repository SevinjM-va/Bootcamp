-- -- Database: Public

-- -- DROP DATABASE IF EXISTS "Public";

-- CREATE DATABASE "Public"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;
select * from items
-- 1.
select * from items order by item_price ASC;
-- 2.
select * from items where item_price >= 80 order by item_price DESC ;
-- 3.
select * from customers
select first_name from customers order by first_name ASC;
-- 4.
select * from customers order by last_name DESC;

