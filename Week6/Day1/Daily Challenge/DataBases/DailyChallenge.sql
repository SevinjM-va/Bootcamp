-- create table actors (
-- 	actor_id serial primary key,
-- 	first_name varchar(30) not null,
-- 	last_name varchar (50) not null,
-- 	age date not null,
-- 	number_oscars smallint not null
-- )
select * from actors;

insert into actors (first_name, last_name,age,number_oscars)
values ('Bred','Pitt','02/10/1980',8),
('Tom','Scott','09/20/1980', 5),
('Kate','Jolie','10/20/1980', 6);

select count(actor_id) from actors;


insert into actors (first_name, last_name, age,number_oscars)
values ('Sarah','Manz', '08/16/1990', 4);




