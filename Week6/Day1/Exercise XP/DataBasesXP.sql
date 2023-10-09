
create table items (
	item_id serial primary key,
	item_name varchar(30) not null,
	item_price smallint not null
)

insert into items (item_name, price)
values ('Small Desk', 100),
('Large desk', 300),
('Fan', 80);


-- create table customers (
-- 	customer_id serial primary key,
-- 	first_name varchar(30) not null,
-- 	last_name varchar (50) not null)
	
select * from customers;

-- 1.
select * from items;
-- 2.
select * from items where item_price > 80;
-- 3.
select * from items where item_price >= 300;
-- 4.
select * from customers where last_name = 'Smith';
-- 5.
select * from customers where last_name = 'Jones';
-- 6.
select * from customers where first_name = 'Scott';


















