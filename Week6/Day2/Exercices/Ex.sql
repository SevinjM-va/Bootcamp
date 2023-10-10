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
select * from students;



-- select avg(number_oscar) from students;
-- select * from students order by (number_oscar)DESC;
-- select * from students where birth_date > '01/01/1990';
-- select * from students where first_name in ('Yohan', 'Mark')

update students set first_name = 'Maty' where first_name = 'Matt' and last_name = 'Damon';
update students set number_oscar = 4 where first_name = 'Yohan';

alter table students rename column birth_date to age;
delete from students where student_id = 5
returning *;
