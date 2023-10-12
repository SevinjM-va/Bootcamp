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
create table items(
	item_id serial primary key,
	item_name varchar(50) not null,
	item_price integer not null
)
create table product_orders(
	order_id serial primary key,
	item_id integer not null,
	item_selling_price integer not null
)
alter table product_orders
rename column total_num to total_item_num


select * from items
select * from product_orders

insert into items (item_name,item_price)
values ('sofa',500),
('cupboard',500),
('carpet',500),
('chair',500),
('tv-set',500)

insert into product_orders(item_id,total_item_num,item_selling_price)
values (1,3, 800),(1,3, 800),(4,12, 200),(5,2, 2500);

-- 3.
select items.item_id,items.item_name,items.item_price, product_orders.item_selling_price,product_orders.total_item_num,(product_orders.item_selling_price * product_orders.total_item_num) as total_price from items
full join product_orders
on items.item_id = product_orders.item_id

-- 4.
create table users(
	user_id serial primary key,
	first_name varchar(50) not null,
	last_name varchar(100),
	item_id integer
)

select * from users

insert into users (first_name,last_name,item_id)
values ('Ali','Aliyev',1)

select * from items
select * from product_orders

select users.user_id,users.first_name,users.last_name,
items.item_name from users
inner join items
on users.item_id = items.item_id

select users.first_name, product_orders.item_id,count(product_orders.item_id) as total_order
-- (product_orders.item_selling_price * total_order ) as total_cost 
from users
inner join product_orders
on users.item_id = product_orders.item_id
group by users.first_name, product_orders.item_id

select items.item_id,items.item_name,items.item_price, product_orders.item_selling_price,product_orders.total_item_num,(product_orders.item_selling_price * product_orders.total_item_num) as total_price from items
full join product_orders
on items.item_id = product_orders.item_id