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

-- 1.
create table customer(
customer_id serial primary key,
first_name varchar(30),
last_name varchar(50)not null
)
select * from customer;

create table Customer_profile (
id serial primary key,
isLoggedIn boolean DEFAULT false,
customer_id integer references customer(customer_id)
)
select * from Customer_profile;

-- 2.
insert into customer (first_name, last_name)
values ('John','Doe'),
('Jerome','Lalu'),
('Lea','Rive');

-- 3.
insert into Customer_profile(customer_id,isLoggedIn)
values (1, 'true'),
(2, true)
-- 4.
select customer.customer_id, customer.first_name, customer.last_name,isLoggedIn from customer
inner join Customer_profile
on customer.customer_id = Customer_profile.customer_id
where isLoggedIn = 'true';

select customer.first_name from customer
inner join Customer_profile
on customer.customer_id = Customer_profile.customer_id
where isLoggedIn != 'true'



-- Part 2
-- 1
create table book (
book_id serial primary key,
title varchar(100) not null,
author varchar(200) not null
)
-- 2.
insert into book (title,author)
values('Alice In Wonderland','Lewis Carroll'),
('Harry Potter','J.K Rowling'),
('To kill a mockingbird','Harper Lee');

-- 3.
create table student (
student_id serial primary key,
name varchar(100) not null unique,
age integer check(age<=15)
)

-- 4.
insert into student (name,age)
values('John',12),
('Lera',11),
('Patrick',10),
('Bob',14)

-- 5.
create table library (
book_fr_id integer references book(book_id) on delete cascade on update cascade,
student_id integer references student(student_id) on delete cascade on update cascade,
borrowed_date date
	
)

-- 6.
insert into library (student_id,book_fr_id,borrowed_date)
values
	   ((select student_id from student where name = 'Bob'),
		(select book_id from book where title = 'Alice In Wonderland'),'2021-05-23')
	   ),((select student_id from student where name = 'Lera'),
		(select book_id from book where title = 'To kill a mockingbird'),'2021-03-03')
	   ),((select student_id from student where name = 'Bob'),
		(select book_id from book where title = 'Harry Potter'),'2021-08-12')
	   )

-- !!! sintaks xetasi

select * from library
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
