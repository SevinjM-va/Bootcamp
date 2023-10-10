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

create table students(
student_id serial primary key,
first_name varchar not null,
last_name varchar not null,
birth_date date not null
)

insert into students(first_name, last_name,birth_date)
values('Yohan','Cohen','12/03/2010'),
('Lea','Benichou','07/27/1987'),
('Amelia','Dux','04/07/1996'),
('David','Grez','06/14/2003'),
('Omer','Simpson','10/03/1980');

-- 1.
select * from students;

-- 2.
select first_name, last_name from students;

-- 3.1
select first_name, last_name from students where student_id = '2';

-- 3.2
select first_name, last_name from students where last_name = 'Benichou' and first_name = 'Marc';

-- 3.3
select first_name, last_name from students where last_name = 'Benichou' or first_name = 'Marc';

-- 3.4
select first_name, last_name from students where first_name ilike '%a%' ;

-- 3.5
select first_name, last_name from students where first_name ilike 'A%';

-- 3.6
select first_name, last_name from students where first_name like '%a';

-- 3.7
select first_name, last_name from students where first_name like '%a%' ;

-- 3.8
select first_name, last_name from students where student_id = 1 or student_id = 3;

--  4
select * from students where birth_date >= '01/01/2000';


