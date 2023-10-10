-- -- Database: Bootcamp

-- -- DROP DATABASE IF EXISTS "Bootcamp";

-- CREATE DATABASE "Bootcamp"
--     WITH
--     OWNER = postgres
--     ENCODING = 'UTF8'
--     LC_COLLATE = 'English_United States.1252'
--     LC_CTYPE = 'English_United States.1252'
--     TABLESPACE = pg_default
--     CONNECTION LIMIT = -1
--     IS_TEMPLATE = False;

-- 1.
select * from students;
-- 2.
select * from students order by last_name ASC limit 1;
-- 3.
select * from students order by birth_date DESC limit 1 ;
-- 4.
select * from students offset 2;